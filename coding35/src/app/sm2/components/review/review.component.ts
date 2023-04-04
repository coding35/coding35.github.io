import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subscribable } from 'rxjs';
import { IFlashCard } from '../../interface/IFlashCard';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnChanges {
  @Input() card!: IFlashCard;
  content!: string;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      fetch(`../../assets/templates/${this.card.contentId}/page.html`)
        .then((res) => res.text())
        .then((html) => {
          this.content = html;
        });
    }, 500);
  }
}
