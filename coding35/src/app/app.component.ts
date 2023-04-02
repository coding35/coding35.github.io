import { Component, OnInit } from '@angular/core';
import { ContentModel, IContentModel } from './shared/models/content-model';
import { IdbStorageAccessService } from './shared/service/idb-storage-access.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title = 'coding35';

}
