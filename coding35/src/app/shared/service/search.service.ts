import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  ee: EventEmitter<string> = new EventEmitter<string>();
}
