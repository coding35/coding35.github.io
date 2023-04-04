import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterModule } from './footer/footer.module';
import { MainModule } from './main/main.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { IdbStorageAccessService } from './shared/service/idb-storage-access.service';
import { Sm2Module } from './sm2/sm2.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    MainModule,
    Sm2Module,
    FooterModule,
    BrowserAnimationsModule,
    AppRoutingModule

  ],
  providers: [
    IdbStorageAccessService,
    {
      provide: APP_INITIALIZER,
      useFactory: (svc: IdbStorageAccessService) => () => svc.init(),
      deps: [IdbStorageAccessService], multi: true
    },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: Window, useValue: window }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
