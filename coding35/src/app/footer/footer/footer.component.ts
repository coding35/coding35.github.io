import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LinkListModel } from 'src/app/shared/models/link-list-model';
import { LinkModel } from 'src/app/shared/models/link-model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  linkLists: LinkListModel[] = [];

  constructor() {
  }
  ngOnInit(): void {
    fetch('../../assets/footer-links.json').then(response => response.json()).then(meta => {
      this.linkLists = meta as LinkListModel[];
    });
  }
}
