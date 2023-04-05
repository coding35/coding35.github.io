import { Injectable } from '@angular/core';
import { Dropbox } from 'dropbox';

@Injectable()
export class DropboxService {
  dbx!: Dropbox;
  constructor() {}
  init() {
    const key = localStorage.getItem('dropboxKey') || '';

    if(!key){
        console.log('DropboxService.init() - no key');
        alert('No Dropbox key found. Please set one in the settings.');
        return;
    }

    console.log('DropboxService.init()');
    this.dbx = new Dropbox({
      accessToken: key
    });

    this.dbx
      .filesListFolder({ path: '' })
      .then((response: any) => {
        //console.log(response);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  downloadFile(filePath: string): Promise<any> {
    return this.dbx
      .filesDownload({ path: filePath });
  }

  uploadFile(
    content: string,
    filePath: string
  ): Promise<any> {
    return this.dbx
      .filesUpload({
        path: filePath,
        contents: content, 
        mode: { '.tag': 'overwrite' }
      })
      .then((response: any) => {
        console.log(response);
      })
      .catch((err: any) => {
        console.error(err);
      });
  }
}
