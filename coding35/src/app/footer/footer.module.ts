import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterLinkContainerComponent } from './components/footer-link-container/footer-link-container.component';
import { FooterLinkListComponent } from './components/footer-link-list/footer-link-list.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    FooterLinkContainerComponent,
    FooterLinkListComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }
