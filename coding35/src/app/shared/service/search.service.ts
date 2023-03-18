import { EventEmitter, Injectable } from '@angular/core';
import { ContentModel } from '../models/content-model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  ee: EventEmitter<string> = new EventEmitter<string>();
}
