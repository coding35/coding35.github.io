import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HeadsUpDialogComponent } from './shared/dialog/heads-up/heads-up-dialog.component';
import { SearchService } from 'src/app/shared/service/search.service';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'coding35';

  constructor(
    private cookieService: CookieService,
    private search: SearchService,
    public dialog: MatDialog
  ) {
    let noticeCookie = cookieService.get('notice');
    if (!noticeCookie) {
      this.openDialog();
    }

    this.registerKeyBoardEvent();
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
      if(e.key === 'Enter'){
        this.search.ee.emit(search);
        search = '';
      }
      if(e.key === 'Delete'){
        search = '';
        this.search.ee.emit(search);
      }
    };
  }
}
