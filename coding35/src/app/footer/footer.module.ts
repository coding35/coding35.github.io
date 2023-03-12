import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterLinkListComponent } from './components/footer-link-list/footer-link-list.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterLinkListComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }
 