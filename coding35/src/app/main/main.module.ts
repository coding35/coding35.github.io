import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentComponent } from './components/content/content.component';
import { AppRoutingModule } from '../app-routing.module';
import { RightNavComponent } from './components/right-nav/right-nav.component';
import { SharedModule } from '../shared/shared.module';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips'; 
import { ContentListComponent } from './components/content-list/content-list.component';
import { MatCardAvatar, MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PageComponent } from './components/page/page.component';


@NgModule({
  declarations: [
    ContentComponent,
    PageComponent,
    RightNavComponent,
    ContentListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    AppRoutingModule
  ],
  exports: [ContentComponent]

})
export class MainModule { }
