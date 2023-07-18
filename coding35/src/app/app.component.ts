import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HeadsUpDialogComponent } from './shared/dialog/heads-up/heads-up-dialog.component';
import { SearchService } from 'src/app/shared/service/search.service';
import { CookieService } from 'ngx-cookie';
import { LoadService } from './shared/service/load.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'coding35';

  @ViewChild('content') content: ElementRef<HTMLDivElement> | undefined;

  constructor(
    private cookieService: CookieService,
    private search: SearchService,
    public dialog: MatDialog,
    private renderer: Renderer2,
    private load: LoadService
  ) {
    let noticeCookie = cookieService.get('notice');
    if (!noticeCookie) {
      this.openDialog();
    }

    this.registerKeyBoardEvent();
  }

  ngAfterViewInit(): void {
    this.load.ee.subscribe((val) => {
      this.renderer.setStyle(this.content!.nativeElement, 'display', 'initial');
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(HeadsUpDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      this.cookieService.put('notice', 'true');
    });
  }

  registerKeyBoardEvent() {
    let search = '';
    document.onkeydown = (e) => {
      if (/^[a-zA-Z]$/.test(e.key)) {
        search += e.key;
      }
      if (e.key === 'Enter') {
        this.search.ee.emit(search);
        search = '';
      }
      if (e.key === 'Delete') {
        search = '';
        this.search.ee.emit(search);
      }
    };
  }
}
