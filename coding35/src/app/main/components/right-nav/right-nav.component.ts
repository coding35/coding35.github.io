import { Component, OnInit } from '@angular/core';
import { LinkListModel } from 'src/app/shared/models/link-list-model';

@Component({
  selector: 'app-right-nav',
  templateUrl: './right-nav.component.html',
  styleUrls: ['./right-nav.component.scss']
})
export class RightNavComponent implements OnInit {
  categoryLinks : LinkListModel[] = [];

  constructor() { }

  ngOnInit(): void {
    fetch('../../assets/right-side-nav.json').then(response => response.json()).then(meta => {
      this.categoryLinks = meta as LinkListModel[];
    });
  }
}
