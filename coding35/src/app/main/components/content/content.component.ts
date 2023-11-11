import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { LoadService } from 'src/app/shared/service/load.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements AfterViewInit {
  @ViewChild('content') content: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('navBar') navBar: ElementRef<HTMLDivElement> | undefined;
  constructor(private renderer: Renderer2, private load: LoadService) { 
  }

  ngAfterViewInit(): void {
    this.load.ee.subscribe((val) => {
      this.renderer.setStyle(this.content!.nativeElement, 'visibility', 'visible');
      this.renderer.setStyle(this.navBar!.nativeElement, 'visibility', 'visible');
    });
  }

  public showSideBar(): boolean {
    const url = window.location.href;
    if (url.includes('sm2')) {
      return false;
    }
    return true;
  }
}