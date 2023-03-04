import { Component } from '@angular/core';
import { LinkListModel } from 'src/app/shared/models/link-list-model';
import { LinkModel } from 'src/app/shared/models/link-model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  linkLists: LinkListModel[] = [
    new LinkListModel(
      'Site',
      [
        new LinkModel('Blog', '/', 'home', '_self'),
        new LinkModel('Videos', '/', 'home', '_self'),
        new LinkModel('Books', '/', 'home', '_self'),
        new LinkModel('About', '/', 'home', '_self')
      ]),
    new LinkListModel(
      'Social Media', [
      new LinkModel('LinkedIn', '/', 'home', '_self'),
      new LinkModel('Facebook', '/', 'home', '_self'),
      new LinkModel('Twitter', '/', 'home', '_self')
    ]),

  ];

  constructor() {
    console.log(this.linkLists);
  }

}
