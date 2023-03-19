import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, Scroll } from '@angular/router';
import { Subscription } from 'rxjs';
import { ContentModel, ContentType } from 'src/app/shared/models/content-model';
import { SearchService } from 'src/app/shared/service/search.service';

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
  filter: ContentType = ContentType.Architecture;
  routerSubscription: Subscription = new Subscription;
  category: string = "";

  constructor(private route: ActivatedRoute, private router: Router, private search: SearchService) { }

  ngOnInit(): void {
    this.routerSubscription = this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd || val instanceof Scroll) {
        let page = this.route.snapshot.data['page'];
        switch (page) {
          case 'architecture':
            this.filter = ContentType.Architecture;
            this.pageTitle = "Architecture";
            break;
          case 'design':
            this.filter = ContentType.Design;
            this.pageTitle = "Design";
            break;
          case 'coding':
            this.filter = ContentType.Coding;
            this.pageTitle = "Coding";
            break;
          case 'video':
            this.filter = ContentType.Video;
            this.pageTitle = "Video Tutorials";
            break;
          case 'book':
            this.filter = ContentType.Book;
            this.pageTitle = "Book List";
            break;
          case 'electronics':
            this.filter = ContentType.Electronics;
            this.pageTitle = "Electronics";
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
            this.contentList = list.filter(f => f.categories.includes(this.route.snapshot.params['search'])).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
          } else {
            this.contentList = list.filter(f => f.type == this.filter).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
          }
        });
      }
    })

    this.search.ee.subscribe((val) => {
      this.category = val || "All";
      this.filter = ContentType.Search;
      fetch('../../assets/json/content.json').then(response => response.json()).then(meta => {
        let content = meta as ContentModel[];
        this.contentList = content
          .filter(m =>
            m.title.toLowerCase().includes(val.toLowerCase()) ||
            m.subtitle.toLowerCase().includes(val.toLowerCase()) ||
            m.categories.some(s => s.toLowerCase().includes(val.toLowerCase())) ||
            m.tags.some(s => s.toLowerCase().includes(val.toLowerCase())) ||
            m.description.toLowerCase()
            .includes(val.toLowerCase()))
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
            let count = this.contentList.length;
        this.pageTitle = `Search returned ${count} ${count == 1 ? "result" : "results"} for term: `;
      })
    })
  }

  handleReadMore(id: string) {
    scrollTo(0, 0);
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

