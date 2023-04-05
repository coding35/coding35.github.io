import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sm2Component } from './sm2.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { IdbSm2StorageAccessService } from './service/idb-sm2-storage-access.service';
import { ReviewComponent } from './components/review/review.component';
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from '@angular/forms';
import { DropboxService } from './service/dropbox';

@NgModule({
    declarations: [Sm2Component, ReviewComponent],
    exports: [Sm2Component],
    providers: [
        DropboxService,
        {
            provide: APP_INITIALIZER,
            useFactory: (svc: DropboxService) => () => svc.init(),
            deps: [DropboxService], multi: true
        },
        IdbSm2StorageAccessService,
        {
            provide: APP_INITIALIZER,
            useFactory: (svc: IdbSm2StorageAccessService) => () => svc.init(),
            deps: [IdbSm2StorageAccessService], multi: true
        },
        { provide: Window, useValue: window }
    ],
    imports: [
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
export class Sm2Module {}
