import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './components/page/page.component';
import { ContentComponent } from './content/content.component';



@NgModule({
  declarations: [
    ContentComponent,
    PageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ContentComponent]
  
})
export class MainModule { }
