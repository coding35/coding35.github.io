import { AfterViewInit, Component, OnInit, Sanitizer } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, Scroll } from '@angular/router';
import { Subscription } from 'rxjs';
import { ContentModel } from 'src/app/shared/models/content-model';
import { IdbStorageAccessService } from 'src/app/shared/service/idb-storage-access.service';
import { SearchService } from 'src/app/shared/service/search.service';

declare global {
  interface Window {
    PR: any;
  }
}

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  pageContent: ContentModel | undefined;
  id: any | undefined;
  notFound: boolean = false;
  routerSubscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private search: SearchService,
    private indexDbSvc: IdbStorageAccessService,
  ) {}

  ngOnInit(): void {
    this.routerSubscription = this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd || val instanceof Scroll) {
        let id = this.route.snapshot.paramMap.get('id') || '-1';
        if (id === '-1') {
          this.notFound = true;
        }
        this.indexDbSvc.get(id).then((data) => {
            fetch(`../../assets/templates/${id}/page.html`)
              .then((response) => response.text())
              .then((html) => {
                this.pageContent = data as ContentModel;
                if (
                  this.pageContent === undefined ||
                  html.indexOf('Cannot GET /assets') > -1
                ) {
                  this.notFound = true;
                } else {
                  this.pageContent.content = html;
                  if (this.pageContent.tags.some((tag) => tag === 'snippet')) {
                    setTimeout(() => {
                      window.PR.prettyPrint();
                    }, 0);
                  }
                  if (this.pageContent.callback.name) {
                    const callback = this.pageContent.callback;
                    setTimeout(() => {
                      if (callback.styles) {
                        callback.styles.forEach((style: string) => {
                          const link = document.createElement('link');
                          link.href = style;
                          link.type = 'text/css';
                          link.rel = 'stylesheet';
                          console.log(link);
                          document.head.appendChild(link);
                        });
                      }
                          if (callback.dependencies) {
                            callback.dependencies.forEach(
                              (dependency: string) => {
                                const script = document.createElement('script');
                                script.src = dependency;
                                document.body.appendChild(script);
                              }
                            );
                          }
                      fetch(`../../assets/templates/${id}/script.js`)
                        .then((response) => response.text())
                        .then((data) => {

                          var script = document.createElement('script');
                          script.innerHTML = data;
                          document.body.appendChild(script);
                        });
                    }, this.pageContent.callback.delay | 0);
                  }
                }
              });
          });
      }
    });
    this.search.ee.subscribe((search: string) => {
      this.router.navigate(['search']);
    });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}
