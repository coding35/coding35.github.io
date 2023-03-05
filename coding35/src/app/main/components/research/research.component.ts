import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, Scroll } from '@angular/router';
import { Subscription } from 'rxjs';
import { ContentModel } from 'src/app/shared/models/content-model';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {
  researchContent: ContentModel | undefined;
  id: any | undefined;
  notFound: boolean = false;
  routerSubscription: Subscription = new Subscription;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.routerSubscription = this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd || val instanceof Scroll) {
        let id = this.route.snapshot.paramMap.get('id');
        fetch('../../assets/json/research-content.json').then(response => response.json()).then(meta => {
          fetch(`../../assets/templates/${id}.html`).then(response => response.text()).then(html => {
            let json = meta as ContentModel[];
            this.researchContent = json.filter((item: ContentModel) => item.id === id).pop() as ContentModel;
            if (this.researchContent === undefined) {
              this.notFound = true;
            } else {
              this.researchContent.content = html;
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
