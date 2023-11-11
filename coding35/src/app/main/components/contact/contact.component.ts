import { Component } from '@angular/core';
import { LoadService } from 'src/app/shared/service/load.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(load: LoadService) {
    load.ee.emit('contact');
   }
}
