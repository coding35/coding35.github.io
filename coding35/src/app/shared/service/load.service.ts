import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadService {
  ee: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
}
