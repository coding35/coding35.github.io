import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HeadsUpDialogComponent } from './shared/dialog/heads-up/heads-up-dialog.component';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title = 'coding35';

  constructor(private cookieService: CookieService, public dialog: MatDialog) {
    let noticeCookie = cookieService.get("notice");
    if (!noticeCookie) {
      this.openDialog();
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(HeadsUpDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.cookieService.put("notice", "true");
    });
  }
}
