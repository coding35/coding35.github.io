import { Injectable } from '@angular/core';
import { IContentModel, ContentModel } from '../models/content-model';

@Injectable()
export class IdbStorageAccessService {
  idb = this.windowObj.indexedDB;
  indexedDb!: IDBDatabase;
  data: IContentModel[] = [];

  private readonly database = 'Coding35';
  private readonly version = 1;
  private readonly store = 'ContentStore';

  constructor(private windowObj: Window) {}

  init() {
    fetch('../../assets/json/content.json')
      .then((response) => response.json())
      .then((data) => {
        data.forEach((element: IContentModel) => {
          this.data.push(new ContentModel(element));
        });
      });

    let request = this.idb.open(this.database, this.version);

    request.onsuccess = (event: any) => {
      this.insertData(event);
    };

    request.onerror = (event: any) => {
      console.log('Error opening DB');
    };

    request.onupgradeneeded = (event: any) => {
      this.createDatabase(event);
    };
  }

  private insertData(event: any) {
    this.indexedDb = event?.target?.result;
    console.log('DB opened successfully');
    const transaction = this.indexedDb.transaction([this.store], 'readwrite');
    const objectStore = transaction.objectStore(this.store);
    this.data.forEach((element) => {
      if(objectStore.get(element.id)) {
        transaction.objectStore(this.store).put(element);
      }else{
        transaction.objectStore(this.store).add(element);
      }
      
    });
  }

  private createDatabase(event: any) {
    console.log('Creating DB');
    this.indexedDb = event.target.result;

    let objectStore = this.indexedDb.createObjectStore(this.store, {
      keyPath: 'id',
    });
    objectStore.createIndex('content', 'content', { unique: false });

    objectStore.transaction.oncomplete = (event: any) => {
      console.info('Create Database Transaction Complete.');
      const transaction = this.indexedDb.transaction([this.store], 'readwrite');  
      transaction.objectStore(this.store).clear();
      transaction.oncomplete = (event: any) => {
        console.info('Transaction Complete.');
      };
      transaction.onerror = (event: any) => {
        console.error(`Transaction Error. ${event}`);
      };
    };
  }

  get(id: string): Promise<IContentModel> {
    return new Promise((resolve, reject) => {
      let request = this.idb.open(this.database,this.version);
      request.onsuccess = (event: any) => {
        this.indexedDb = event?.target?.result;
        this.indexedDb
          .transaction(this.store)
          .objectStore(this.store)
          .get(id).onsuccess = (event: any) => {
          resolve(event.target.result);
        };
        onerror = (event: any) => {
          reject(event);
        };
      };
    });
  }

  getAll(): Promise<IContentModel[]> {
    return new Promise((resolve, reject) => {
      let request = this.idb.open(this.database, this.version);
      request.onsuccess = (event: any) => {
        this.indexedDb = event?.target?.result;
        this.indexedDb
          .transaction(this.store)
          .objectStore(this.store)
          .getAll().onsuccess = (event: any) => {
          resolve(event.target.result);
        };
        onerror = (event: any) => {
          reject(event);
        };
      };
    });
  }
}
