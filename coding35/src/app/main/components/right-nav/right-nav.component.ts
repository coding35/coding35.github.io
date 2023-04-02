import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ContentModel } from 'src/app/shared/models/content-model';
import { LinkListModel } from 'src/app/shared/models/link-list-model';
import { LinkModel } from 'src/app/shared/models/link-model';
import { IdbStorageAccessService } from 'src/app/shared/service/idb-storage-access.service';
import { SearchService } from 'src/app/shared/service/search.service';

@Component({
  selector: 'app-right-nav',
  templateUrl: './right-nav.component.html',
  styleUrls: ['./right-nav.component.scss']
})
export class RightNavComponent implements OnInit {

  value = '';
  categoryLinks: LinkListModel[] = [];

  constructor(private router: Router, private search: SearchService, private indexDbSvc: IdbStorageAccessService) { }

  ngOnInit(): void {
    this.indexDbSvc.getAll().then(meta => {
      let content = meta as ContentModel[];
      let flat = content.map(m => m.categories).flat();
      let unique = flat.filter((v, i, a) => a.indexOf(v) === i).map(m => new LinkModel(m));
      let list = new Array<LinkListModel>();
      list.push(new LinkListModel("Categories", unique.sort((a, b) => a.title.localeCompare(b.title))));
      this.categoryLinks = list;
    });
  }

  handleClick(url: string) {
    scrollTo(0, 0);
    this.router.navigate(['/category/' + url]);
  }

  searchEvent($event: any) {
      this.search.ee.emit(this.value);
  }
}
