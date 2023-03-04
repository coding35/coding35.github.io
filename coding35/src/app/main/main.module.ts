import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './components/blog/blog.component';
import { ContentComponent } from './components/content/content.component';
import { AppRoutingModule } from '../app-routing.module';
import { RightNavComponent } from './components/right-nav/right-nav.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ContentComponent,
    BlogComponent,
    RightNavComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [ContentComponent]
  
})
export class MainModule { }
