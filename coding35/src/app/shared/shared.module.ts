import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';

@NgModule({
  declarations: [NotFoundComponentComponent],
  imports: [
    CommonModule
  ],
  exports: [NotFoundComponentComponent]
})
export class SharedModule { }
