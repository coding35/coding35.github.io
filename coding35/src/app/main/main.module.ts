import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { RightNavComponent } from './components/right-nav/right-nav.component';
import { SharedModule } from '../shared/shared.module';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { ContentListComponent } from './components/content-list/content-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PageComponent } from './components/page/page.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContentComponent } from './components/content/content.component';
import { ForceDirectedTreeComponent } from './components/force-directed-tree/force-directed-tree.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContentComponent,
    PageComponent,
    RightNavComponent,
    ContentListComponent,
    AboutComponent,
    ContactComponent,
    ForceDirectedTreeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [ContentComponent]

})
export class MainModule { }
