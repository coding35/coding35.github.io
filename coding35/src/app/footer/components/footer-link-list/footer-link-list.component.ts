import { Component, Input } from '@angular/core';
import { Route } from '@angular/router';
import { LinkListModel } from 'src/app/shared/models/link-list-model';


@Component({
  selector: 'app-footer-link-list',
  templateUrl: './footer-link-list.component.html',
  styleUrls: ['./footer-link-list.component.scss']
})
export class FooterLinkListComponent {
  @Input() links: LinkListModel | undefined;

  constructor() {

  }

}
