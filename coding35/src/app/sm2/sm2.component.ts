import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as dayjs from 'dayjs';
import { SuperMemoGrade, supermemo } from 'supermemo';
import { IdbStorageAccessService } from '../shared/service/idb-storage-access.service';
import { IFlashCard } from './interface/IFlashCard';
import { Session } from './questions/Session';
import { IdbSm2StorageAccessService } from './service/idb-sm2-storage-access.service';

@Component({
  selector: 'app-sm2',
  templateUrl: './sm2.component.html',
  styleUrls: ['./sm2.component.scss'],
})
export class Sm2Component implements OnInit {
  flashcards: IFlashCard[] = [];
  currentCard!: IFlashCard;
  sessionData!: Session;
  allCards!: IFlashCard[];
  buttonToggle = false || undefined;
  constructor(
    private indexDbSvc: IdbStorageAccessService,
    private indexDbSvcSm2: IdbSm2StorageAccessService
  ) {}

  ngOnInit(): void {
    this.indexDbSvc.getAll().then((allContent) => {
      this.indexDbSvcSm2.getAll().then((pastSession: IFlashCard[]) => {
        let sm2Content = new Session(
          allContent.filter(
            (x) =>
              x.type !== 'book' &&
              x.type !== 'electronics' &&
              x.type !== 'self-learning'
          )
        );
        sm2Content.flashcards.forEach((element: IFlashCard) => {
          this.indexDbSvcSm2.update(element);
        });
        this.indexDbSvcSm2.getAll().then((data) => {
          this.allCards = data;
          this.getCard();
        });
      });
    });
  }

  getCard(): void {
    let cards = this.allCards.filter(
      (x) => new Date(x.dueDate).getDate() < Date.now()
    )!;
    if (!cards) {
      cards = this.allCards.filter(
        (x) => new Date(x.dueDate).getDate() > Date.now() + 1
      )!;
    }

    this.currentCard = cards[Math.floor(Math.random() * cards.length)];
  }

  practice(flashcard: IFlashCard, grade: SuperMemoGrade): IFlashCard {
    const { interval, repetition, efactor } = supermemo(flashcard, grade);
    const dueDate = dayjs(Date.now()).add(interval, 'day').toISOString();
    const result = { ...flashcard, interval, repetition, efactor, dueDate };
    this.indexDbSvcSm2
      .update(result)
      .then((data) => {
        this.buttonToggle = undefined;
        this.getCard();
      })
      .catch((err) => {
        console.error(err);
      });
    return result;
  }

  export(): void {
    this.indexDbSvcSm2.getAll().then((allContent) => {
      const dataStr =
        'data:text/json;charset=utf-8,' +
        encodeURIComponent(JSON.stringify(allContent));
      const downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute('href', dataStr);
      downloadAnchorNode.setAttribute('download', 'sm2.json');
      document.body.appendChild(downloadAnchorNode); // required for firefox
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    });
  }

  import(): void {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (event) => {
      const target = event.target as HTMLInputElement;
      const file = target.files?.item(0);
      if (file) {
        const reader = new FileReader();
        reader.readAsText(file, 'UTF-8');
        reader.onload = (readerEvent) => {
          const content = readerEvent.target?.result;
          if (content) {
            const data = JSON.parse(content as string);
            this.indexDbSvcSm2.clear();
            data.forEach((element: IFlashCard) => {
              this.indexDbSvcSm2.update(element);
            });
          }
        };
      }
    };
    input.click();
  }
}
