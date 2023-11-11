import { Component } from '@angular/core';
import { LoadService } from 'src/app/shared/service/load.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  constructor(load: LoadService) {
    load.ee.emit('about');
   }
}
