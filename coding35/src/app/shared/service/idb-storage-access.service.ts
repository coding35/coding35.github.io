import { Injectable } from '@angular/core';
import { IContentModel, ContentModel } from '../models/content-model';

@Injectable()
export class IdbStorageAccessService {

  idb = this.windowObj.indexedDB;
  indexedDb!: IDBDatabase;
  data: IContentModel[] = [];

  constructor(private windowObj: Window) {}

  init() {
    fetch('../../assets/json/content.json')
      .then((response) => response.json())
      .then((data) => {
        data.forEach((element: IContentModel) => {
          this.data.push(new ContentModel(element));
        });
        let request = this.idb.open('Coding35', 1);

        request.onsuccess = (event: any) => {
          this.indexedDb = event?.target?.result;
          console.log('DB opened successfully');
          const transaction = this.indexedDb.transaction(
            ['ContentStore'],
            'readwrite'
          );
          transaction.objectStore('ContentStore').clear();
          this.data.forEach((element) => {
            transaction.objectStore('ContentStore').add(element);
          });
        };

        request.onerror = (event: any) => {
          console.log('Error opening DB');
        };

        request.onupgradeneeded = (event: any) => {
          this.indexedDb = event.target.result;
          let objectStore = this.indexedDb.createObjectStore('ContentStore', {
            keyPath: 'id',
          });
          objectStore.createIndex('content', 'content', { unique: false });

          objectStore.transaction.oncomplete = (event: any) => {
            console.info('Create Database Transaction Complete.');
            const transaction = this.indexedDb.transaction(
              ['ContentStore'],
              'readwrite'
            );
            transaction.oncomplete = (event: any) => {
              console.info('Transaction Complete.');
            };
            transaction.onerror = (event: any) => {
              console.error(`Transaction Error. ${event}`);
            };
          };
        };
      });
  }

  get(id: string) : Promise<IContentModel> {
    return new Promise((resolve, reject) => {
      let request = this.idb.open('Coding35', 1);
      request.onsuccess = (event: any) => {
        this.indexedDb = event?.target?.result;
        this.indexedDb
          .transaction('ContentStore')
          .objectStore('ContentStore')
          .get(id)
          .onsuccess = (event: any) => {
          resolve(event.target.result);
        }
        onerror = (event: any) => {
          reject(event);
        }
      };
    });
  }

  getAll(): Promise<IContentModel[]> {
    return new Promise((resolve, reject) => {
      let request = this.idb.open('Coding35', 1);
      request.onsuccess = (event: any) => {
        this.indexedDb = event?.target?.result;
        this.indexedDb
          .transaction('ContentStore')
          .objectStore('ContentStore')
          .getAll()
          .onsuccess = (event: any) => {
          resolve(event.target.result);
        }
        onerror = (event: any) => {
          reject(event);
        }
      };
    });
  }
}
