import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ContentModel } from 'src/app/shared/models/content-model';
import { LinkListModel } from 'src/app/shared/models/link-list-model';
import { LinkModel } from 'src/app/shared/models/link-model';

@Component({
  selector: 'app-right-nav',
  templateUrl: './right-nav.component.html',
  styleUrls: ['./right-nav.component.scss']
})
export class RightNavComponent implements OnInit {

  categoryLinks : LinkListModel[] = [];

  constructor(private router : Router) { }

  ngOnInit(): void {
    fetch('../../assets/json/content.json').then(response => response.json()).then(meta => {
      let content = meta as ContentModel[];
      let flat = content.map(m => m.categories).flat();
      let unique = flat.filter((v, i, a) => a.indexOf(v) === i).map(m => new LinkModel(m));
      let list = new Array<LinkListModel>();
      list.push(new LinkListModel("Categories",  unique.sort((a, b) => a.title.localeCompare(b.title))));
      this.categoryLinks = list;
    });
  }

  handleClick(url: string) {
    this.router.navigate(['/category/' + url]);
    }
}
