import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, Scroll } from '@angular/router';
import { Subscription } from 'rxjs';
import { ContentModel } from 'src/app/shared/models/content-model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogContent: ContentModel | undefined;
  id: any | undefined;
  notFound: boolean = false;
  routerSubscription: Subscription = new Subscription;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.routerSubscription = this.router.events.subscribe((val) => {
      // see also 
      console.log(val);
      if (val instanceof NavigationEnd || val instanceof Scroll) {
        let id = this.route.snapshot.paramMap.get('id');
        console.log(id);
        fetch('../../assets/blog-content.json').then(response => response.json()).then(meta => {
          fetch(`../../assets/templates/${id}.html`).then(response => response.text()).then(html => {
            let json = meta as ContentModel[];
            this.blogContent = json.filter((item: ContentModel) => item.id === id).pop() as ContentModel;
            if (this.blogContent === undefined) {
              this.notFound = true;
            } else {
              this.blogContent.content = html;
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
