import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationSkipped,
  Router,
  Scroll,
} from '@angular/router';
import { Subscription } from 'rxjs';
import {
  ContentModel,
  ContentType,
  IContentModel,
} from 'src/app/shared/models/content-model';
import { IdbStorageAccessService } from 'src/app/shared/service/idb-storage-access.service';
import { LoadService } from 'src/app/shared/service/load.service';
import { SearchService } from 'src/app/shared/service/search.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
})
export class ContentListComponent implements OnInit {
  @ViewChild('content_list') content: ElementRef<HTMLDivElement> | undefined;

  contentList: ContentModel[] = [];
  notFound: boolean = false;
  pageTitle: string = 'Not Found';
  filter: ContentType = ContentType.Architecture;
  routerSubscription: Subscription = new Subscription();
  category: string = '';
  eagerLoadImageList: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private search: SearchService,
    private indexDbSvc: IdbStorageAccessService,
    private renderer: Renderer2,
    private load: LoadService
  ) {}

  ngOnInit(): void {
    this.routerSubscription = this.router.events.subscribe(async (val) => {
      if (val instanceof NavigationSkipped) {
        this.renderer.setStyle(
          this.content!.nativeElement,
          'visibility',
          'visible'
        );
        return;
      }
      this.renderer.setStyle(
        this.content!.nativeElement,
        'visibility',
        'hidden'
      );
      if (val instanceof NavigationEnd || val instanceof Scroll) {
        let page = this.route.snapshot.data['page'];
        switch (page) {
          case 'architecture':
            this.filter = ContentType.Architecture;
            this.pageTitle = 'Architecture';
            break;
          case 'design':
            this.filter = ContentType.Design;
            this.pageTitle = 'Design';
            break;
          case 'code':
            this.filter = ContentType.Code;
            this.pageTitle = 'Code';
            break;
          case 'video':
            this.filter = ContentType.Video;
            this.pageTitle = 'Video Tutorials';
            break;
          case 'book':
            this.filter = ContentType.Book;
            this.pageTitle = 'Book List';
            break;
            case 'machine-learning':
              this.filter = ContentType.MachineLearning;
              this.pageTitle = 'Machine Learning';
              break;
          case 'electronics':
            this.filter = ContentType.Electronics;
            this.pageTitle = 'Electronics';
            break;
          case 'category':
            this.filter = ContentType.Any;
            this.pageTitle = 'Filtering by Category: ';
            this.category = this.route.snapshot.params['search'];
            break;
          case 'list':
            this.filter = ContentType.Any;
            this.pageTitle = '';
            break;
          case 'web':
            this.filter = ContentType.Book;
            this.pageTitle = 'Web';
            break;
          case 'database':
            this.filter = ContentType.Book;
            this.pageTitle = 'Database';
            break;
          case '"design-principles"':
            this.filter = ContentType.DesignPrinciples;
            this.pageTitle = 'Design Principles"';
            break;
          case 'reference':
            this.filter = ContentType.Reference;
            this.pageTitle = 'Reference';
            break;
          default:
            this.pageTitle = 'Not Found';
            this.notFound = true;
            break;
        }

        this.indexDbSvc.getAll<IContentModel[]>('ContentStore').then((data) => {
          data = data.filter((f) => !f.tags.toLocaleString().includes('wip') && f.display);
          const search = this.route.snapshot.params['search'] || '';
          if (this.filter == ContentType.Any) {
            if (search) {
              this.contentList = data.filter((f) =>
                f.categories.includes(search)
              );
            } else {
              this.contentList = data;
            }
            this.contentList.sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            );
          } else {
            this.contentList = data
              .filter((f) => f.type == this.filter)
              .sort(
                (a, b) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime()
              );
          }

          this.contentList.slice(0, 4).forEach((f) => {
            f.loading = 'eager';
            f.fetchpriority = 'high';
            f.rel = 'preload';
          });
          this.load.ee.emit('content-list');
          this.renderer.setStyle(
            this.content!.nativeElement,
            'visibility',
            'visible'
          );
        });
      }
    });

    this.search.ee.subscribe((val) => {
      this.category = val || 'All';
      this.filter = ContentType.Search;
      this.indexDbSvc.getAll<IContentModel[]>('ContentStore').then((data) => {
        data = data.filter((f) => !f.tags.toLocaleString().includes('wip') && f.display);
        let content = data as ContentModel[];
        this.contentList = content
          .filter(
            (m) =>
              m.title.toLowerCase().includes(val.toLowerCase()) ||
              m.subtitle.toLowerCase().includes(val.toLowerCase()) ||
              m.categories.some((s) =>
                s.toLowerCase().includes(val.toLowerCase())
              ) ||
              m.tags.some((s) => s.toLowerCase().includes(val.toLowerCase())) ||
              m.description.toLowerCase().includes(val.toLowerCase())
          )
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          );
        let count = this.contentList.length;
        this.pageTitle = `Search returned ${count} ${
          count == 1 ? 'result' : 'results'
        } for term: `;
      });
    });
  }

  handleReadMore(id: string) {
    scrollTo(0, 0);
    let route = this.contentList.find((f) => f.id == id)?.type;
    this.router.navigate([`/${route}/${id}`]);
  }

  handleCategoryChipClick(chip: string) {
    this.router.navigate([`/category/${chip}`]);
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}
