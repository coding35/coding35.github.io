import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';
import { SafePipe } from './pipe/safe.pipe';
import { HeadsUpDialogComponent } from './dialog/heads-up/heads-up-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CategoryTitlePipe } from './pipe/category-title.pipe';

@NgModule({
  declarations: [NotFoundComponentComponent, SafePipe, HeadsUpDialogComponent, CategoryTitlePipe],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule

  ],
  exports: [NotFoundComponentComponent, SafePipe, CategoryTitlePipe]
})
export class SharedModule { }
