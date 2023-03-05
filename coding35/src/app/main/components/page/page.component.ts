import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, Scroll } from '@angular/router';
import { Subscription } from 'rxjs';
import { ContentModel } from 'src/app/shared/models/content-model';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  pageContent: ContentModel | undefined;
  id: any | undefined;
  notFound: boolean = false;
  routerSubscription: Subscription = new Subscription;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.routerSubscription = this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd || val instanceof Scroll) {
        let id = this.route.snapshot.paramMap.get('id');
        console.log(id)
        fetch('../../assets/json/content.json').then(response => response.json()).then(meta => {
          fetch(`../../assets/templates/${id}.html`)
          .then(response => response.text())
          .then(html => {
            let json = meta as ContentModel[];
            this.pageContent = json.filter((item: ContentModel) => item.id === id).pop() as ContentModel;
            console.log(html)
            if (this.pageContent === undefined || html.indexOf('Cannot GET /assets') > -1) {
              this.notFound = true;
            } else {
              this.pageContent.content = html;
            }
          });
        });
      }
    });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}
