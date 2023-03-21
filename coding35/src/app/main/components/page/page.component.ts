import { AfterViewInit, Component, OnInit, Sanitizer } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, Scroll } from '@angular/router';
import { Subscription } from 'rxjs';
import { ContentModel } from 'src/app/shared/models/content-model';
import { SearchService } from 'src/app/shared/service/search.service';



declare global {
  interface Window {
    PR: any;
  }
}


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

  constructor(private route: ActivatedRoute, private router: Router, private search: SearchService) { }


  ngOnInit(): void {
    this.routerSubscription = this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd || val instanceof Scroll) {
        let id = this.route.snapshot.paramMap.get('id');
        fetch('../../assets/json/content.json').then(response => response.json()).then(meta => {
          fetch(`../../assets/templates/${id}/page.html`)
            .then(response => response.text())
            .then(html => {
              let json = meta as ContentModel[];
              this.pageContent = json.filter((item: ContentModel) => item.id === id).pop() as ContentModel;
              if (this.pageContent === undefined || html.indexOf('Cannot GET /assets') > -1) {
                this.notFound = true;
              } else {
                this.pageContent.content = html;
                if (this.pageContent.tags.some((tag) => tag === 'snippet')) {
                  setTimeout(() => {
                    window.PR.prettyPrint();
                  }, 0);
                }
              }
            });
        });
      }
    });
    this.search.ee.subscribe((search: string) => {
      console.log(search)
      this.router.navigate(['search']);
    });
  }


  ngOnDestroy() {
    //this.search.ee.unsubscribe();
    this.routerSubscription.unsubscribe();
  }
}