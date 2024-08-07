import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as dayjs from 'dayjs';
import { SuperMemoGrade, supermemo } from 'supermemo';
import { IdbStorageAccessService } from '../shared/service/idb-storage-access.service';
import { IFlashCard } from './interface/IFlashCard';
import { Session } from './questions/Session';
import { DropboxService } from '../shared/service/dropbox';
import { IContentModel } from '../shared/models/content-model';
import { LoadService } from '../shared/service/load.service';

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
  cardsToReview: number = 0;
  cardsReviewed: number = 0;
  reviewedCardIds: number[] = [];
  sessionComplete: boolean = false;

  constructor(
    private indexDbSvc: IdbStorageAccessService,
    private dropbox: DropboxService,
    private load: LoadService
  ) {}

  ngOnInit(): void {
    this.indexDbSvc
      .getAll<IContentModel[]>('ContentStore')
      .then((allContent) => {
        this.indexDbSvc
          .getAll<IFlashCard[]>('Sm2Store')
          .then((pastSession: IFlashCard[]) => {
            let sm2Content = new Session(
              allContent.filter((x) => x.tags.indexOf('sm2') > -1)
            );
            this.indexDbSvc.getAll<IFlashCard[]>('Sm2Store').then((data) => {
              //randomize(data);
              const randomizeData = (array: IFlashCard[]) => { 
                for (let i = array.length - 1; i > 0; i--) {
                  const j = Math.floor(Math.random() * (i + 1));
                  [array[i], array[j]] = [array[j], array[i]];
                }
                return array;
              };
              const randomized = randomizeData(data);
              this.allCards = randomized
                .filter((x) => {
                  return new Date(x.dueDate) <= new Date(Date.now());
                })
                .slice(0, 10);
              this.getCard();
            });
            sm2Content.flashcards.forEach((element: IFlashCard) => {
              if (!pastSession.find((x) => x.contentId === element.contentId)) {
                this.indexDbSvc.insert<IFlashCard>(element, 'Sm2Store');
              } else {
                let cardToUpdate = pastSession.find(
                  (x) => x.contentId === element.contentId
                );
                cardToUpdate?.back === element.back;
                cardToUpdate?.front === element.front;
                cardToUpdate?.type === element.type;
                cardToUpdate?.path === element.path;
                this.indexDbSvc.update<IFlashCard>(cardToUpdate!, 'Sm2Store');
              }
            });
          });
      });
    this.setSessionStatus();
    this.load.ee.emit('sm2');
  }

  getCard(): void {
    this.cardsReviewed = this.reviewedCardIds.length;
    let cards = this.allCards.filter((x) => {
      return (
        new Date(x.dueDate) <= new Date(Date.now()) &&
        !this.reviewedCardIds.includes(x.id)
      );
    })!;
    if (!this.cardsReviewed) {
      this.cardsToReview = cards.length;
    }
    this.currentCard = cards[Math.floor(Math.random() * cards.length)];
  }

  practice(flashcard: IFlashCard, grade: SuperMemoGrade): IFlashCard {
    const { interval, repetition, efactor } = supermemo(flashcard, grade);
    const dueDate = dayjs(Date.now()).add(interval, 'day').toISOString();
    const result = { ...flashcard, interval, repetition, efactor, dueDate };
    this.indexDbSvc
      .update<IFlashCard>(result, 'Sm2Store')
      .then((data) => {
        this.buttonToggle = undefined;
        this.reviewedCardIds.push(result.id);
        this.getCard();
      })
      .catch((err) => {
        console.error(err);
      });
    return result;
  }

  export(): void {
    this.indexDbSvc.getAll<IFlashCard[]>('Sm2Store').then((allContent) => {
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
            this.indexDbSvc.clear('Sm2Store');
            data.forEach((element: IFlashCard) => {
              this.indexDbSvc.update<IFlashCard>(element, 'Sm2Store');
            });
          }
        };
      }
    };
    input.click();
  }

  setKey(): void {
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
            localStorage.setItem('dropboxKey', data.key);
          }
          if (localStorage.getItem('dropboxKey')) {
            alert('key set');
          }
        };
      }
    };
    input.click();
  }

  saveToDropbox(): void {
    this.indexDbSvc.getAll<IFlashCard[]>('Sm2Store').then((allContent) => {
      this.dropbox
        .uploadFile(JSON.stringify(allContent), '/sm2.json')
        .then(() => {
          console.log('saved');
          alert('saved');
        })
        .catch((err) => {
          console.error(err);
        });
    });
  }

  loadFromDropbox(): void {
    this.dropbox
      .downloadFile('/sm2.json')
      .then((response: any) => {
        const reader = new FileReader();
        reader.readAsText(response.result.fileBlob, 'UTF-8');
        reader.onload = (readerEvent) => {
          const content = readerEvent.target?.result;
          if (content) {
            const data = JSON.parse(content as string);
            this.indexDbSvc.clear('Sm2Store');
            data.forEach((element: IFlashCard) => {
              this.indexDbSvc.update<IFlashCard>(element, 'Sm2Store');
            });
          }
          alert('loaded');
        };
      })
      .catch((err: any) => {
        console.error(err);
      });
  }

  setSessionStatus(): void {
    if (this.cardsReviewed === this.cardsToReview) {
      this.sessionComplete = true;
    }
    this.sessionComplete = false;
  }
}
