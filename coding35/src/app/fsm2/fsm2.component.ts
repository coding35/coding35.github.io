import { Component } from '@angular/core';
import { IdbStorageAccessService } from '../shared/service/idb-storage-access.service';
import { DropboxService } from '../shared/service/dropbox';
import { IFlashCard } from '../sm2/interface/IFlashCard';
import { LoadService } from '../shared/service/load.service';
import { MatDialog } from '@angular/material/dialog';
import { AddFSM2DialogComponent } from './add-fsm2-dialog/add-fsm2-dialog.component';


@Component({
  selector: 'app-fsm2',
  templateUrl: './fsm2.component.html',
  styleUrls: ['./fsm2.component.scss'],
})
export class Fsm2Component {
  constructor(
    private indexDbSvc: IdbStorageAccessService,
    private dropbox: DropboxService,
    private load: LoadService,
    private dialog: MatDialog,
  ) {
    load.ee.emit('fsm2');
  }

  export(): void {
    this.indexDbSvc.getAll<IFlashCard[]>('FSm2Store').then((allContent) => {
      const dataStr =
        'data:text/json;charset=utf-8,' +
        encodeURIComponent(JSON.stringify(allContent));
      const downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute('href', dataStr);
      downloadAnchorNode.setAttribute('download', 'fsm2.json');
      document.body.appendChild(downloadAnchorNode); // required for firefox
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    });
  }

  import(): void {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (event) => {
      const target = event.target as HTMLInputElement;
      const file = target.files?.item(0);
      if (file) {
        const reader = new FileReader();
        reader.readAsText(file, 'UTF-8');
        reader.onload = (readerEvent) => {
          const content = readerEvent.target?.result;
          if (content) {
            const data = JSON.parse(content as string);
            this.indexDbSvc.clear('FSm2Store');
            data.forEach((element: IFlashCard) => {
              this.indexDbSvc.update<IFlashCard>(element, 'FSm2Store');
            });
          }
        };
      }
    };
    input.click();
  }

  setKey(): void {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (event) => {
      const target = event.target as HTMLInputElement;
      const file = target.files?.item(0);
      if (file) {
        const reader = new FileReader();
        reader.readAsText(file, 'UTF-8');
        reader.onload = (readerEvent) => {
          const content = readerEvent.target?.result;
          if (content) {
            const data = JSON.parse(content as string);
            localStorage.setItem('dropboxKey', data.key);
          }
          if (localStorage.getItem('dropboxKey')) {
            alert('key set');
          }
        };
      }
    };
    input.click();
  }

  saveToDropbox(): void {
    this.indexDbSvc.getAll<IFlashCard[]>('FSm2Store').then((allContent) => {
      this.dropbox
        .uploadFile(JSON.stringify(allContent), '/fsm2.json')
        .then(() => {
          console.log('saved');
          alert('saved');
        })
        .catch((err) => {
          console.error(err);
        });
    });
  }

  loadFromDropbox(): void {
    this.dropbox
      .downloadFile('/fsm2.json')
      .then((response: any) => {
        const reader = new FileReader();
        reader.readAsText(response.result.fileBlob, 'UTF-8');
        reader.onload = (readerEvent) => {
          const content = readerEvent.target?.result;
          if (content) {
            const data = JSON.parse(content as string);
            this.indexDbSvc.clear('FSm2Store');
            data.forEach((element: IFlashCard) => {
              this.indexDbSvc.update<IFlashCard>(element, 'FSm2Store');
            });
          }
          alert('loaded');
        };
      })
      .catch((err: any) => {
        console.error(err);
      });
  }

  add() {
    const dialogRef = this.dialog.open(AddFSM2DialogComponent);;
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      // add to indexdb
    });
  }
}
