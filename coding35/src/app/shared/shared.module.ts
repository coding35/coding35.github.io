import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';
import { SafePipe } from './pipe/safe.pipe';

@NgModule({
  declarations: [NotFoundComponentComponent, SafePipe],
  imports: [
    CommonModule
  ],
  exports: [NotFoundComponentComponent, SafePipe]
})
export class SharedModule { }
