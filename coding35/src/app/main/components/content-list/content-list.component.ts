import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, Scroll } from '@angular/router';
import { Subscription } from 'rxjs';
import { ContentModel, ContentType } from 'src/app/shared/models/content-model';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  contentList: ContentModel[] = [];
  notFound: boolean = false;
  pageTitle: string = "Not Found";
  fetchUrl = '../../assets/json/content.json';
  filter: ContentType = ContentType.Research;
  routerSubscription: Subscription = new Subscription;
  category: string = "";

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.routerSubscription = this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd || val instanceof Scroll) {

        let page = this.route.snapshot.data['page'];
        switch (page) {
          case 'research':
            this.filter = ContentType.Research;
            this.pageTitle = "Research Content";
            break;
          case 'video':
            this.filter = ContentType.Video;
            this.pageTitle = "Video Tutorials";
            break;
          case 'book':
            this.filter = ContentType.Book;
            this.pageTitle = "Book List";
            break;
          case 'category':
            this.filter = ContentType.Any;
            this.pageTitle = "Filtering by Category: ";
            this.category = this.route.snapshot.params['search'];
            break;
          default:
            this.pageTitle = "Not Found";
            this.notFound = true;
            break;
        }

        fetch(this.fetchUrl).then(response => response.json()).then(meta => {
          let list = meta as ContentModel[];
          if (this.filter == ContentType.Any) {
            this.contentList = list.filter(f => f.categories.includes(this.route.snapshot.params['search']));
          } else {
            this.contentList = list.filter(f => f.type == this.filter);
          }
        });
      }
    })
  }

  handleReadMore(id: string) {
    console.log(this.contentList);
    console.log(this.filter);
    let route = this.contentList.find(f => f.id == id)?.type;
    this.router.navigate([`/${route}/${id}`]);
  }

  handleCategoryChipClick(chip: string) {
    this.router.navigate([`/category/${chip}`]);
  }


  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}

