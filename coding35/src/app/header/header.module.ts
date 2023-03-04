import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { LogoComponent } from './components/logo/logo.component';
import { SearchComponent } from './components/search/search.component';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { HeaderComponent } from './header/header.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    TopBarComponent,
    TopNavComponent,
    LogoComponent,
    SearchComponent,
    BottomBarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
