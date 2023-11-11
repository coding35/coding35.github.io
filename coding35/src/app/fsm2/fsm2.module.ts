import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Fsm2Component } from './fsm2.component';
import { DropboxService } from '../shared/service/dropbox';
import { MatButtonModule } from '@angular/material/button';
import { AddFSM2DialogComponent } from './add-fsm2-dialog/add-fsm2-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    Fsm2Component,
    AddFSM2DialogComponent
  ],
  exports: [Fsm2Component],
  providers: [
    DropboxService,
    {
        provide: APP_INITIALIZER,
        useFactory: (svc: DropboxService) => () => svc.init(),
        deps: [DropboxService], multi: true
    },
    { provide: Window, useValue: window }
],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    CdkAccordionModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatTooltipModule,
    RouterModule,
    SharedModule,
    FormsModule
  ]
})
export class Fsm2Module { }
