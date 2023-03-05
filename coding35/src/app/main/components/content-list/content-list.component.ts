import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentModel } from 'src/app/shared/models/content-model';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  contentList: ContentModel[] = [];
  notFound: boolean = false;
  pageTitle: string = "Not Found";

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let page = this.route.snapshot.data['page'];
    let fetchUrl = '';
    switch (page) {
      case 'research':
        this.pageTitle = "Research";
        fetchUrl = '../../assets/json/research-content.json';
        break;
      case 'video':
        this.pageTitle = "Video";
        fetchUrl = '../../assets/json/video-content.json';
        break;
      case 'book':
        this.pageTitle = "Book List";
        fetchUrl = '../../assets/json/book-content.json';
        break;
      default:
        this.pageTitle = "Not Found";
        this.notFound = true;
        break;
    }

    fetch(fetchUrl).then(response => response.json()).then(meta => {
      this.contentList = meta as ContentModel[];
    });

  }
  handleReadMore(id: string) {
    console.log(id)
    this.router.navigate([`/${this.route.snapshot.data['page']}/${id}`]);
  }
}

