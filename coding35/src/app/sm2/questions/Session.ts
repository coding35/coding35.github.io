import * as dayjs from 'dayjs';
import { ContentModel } from 'src/app/shared/models/content-model';
import { IFlashCard } from '../interface/IFlashCard';

const questions = [
  'What makes {{topic}} important?',
  'What is {{topic}}?',
  'When might {{topic}} be most useful and why?',
]

export class Session {
  flashcards: IFlashCard[] = [];
  constructor(topics: ContentModel[]) {
    let id = 0;
    topics.forEach((topic) => {
      questions.forEach((question) => {
        this.flashcards.push({
          id : id++,
          contentId: topic.id,
          type: topic.type,
          path: `#/${topic.type}/${topic.id}`,
          front: question.replace('{{topic}}', topic.title),
          back: topic.description,
          dueDate: dayjs(Date.now()).add(0, 'day').toISOString(),
          efactor: 2.5,
          interval: 0,
          repetition: 0,
        });
      });
    });
  }
}
