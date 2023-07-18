import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { LoadService } from 'src/app/shared/service/load.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements AfterViewInit {
  @ViewChild('content') content: ElementRef<HTMLDivElement> | undefined;
  constructor(private renderer: Renderer2, private load: LoadService) { 
  }

  ngAfterViewInit(): void {
    this.load.ee.subscribe((val) => {
      setTimeout(() => {
      this.renderer.setStyle(this.content!.nativeElement, 'visibility', 'visible');
      }, 500);
    });
  }
}