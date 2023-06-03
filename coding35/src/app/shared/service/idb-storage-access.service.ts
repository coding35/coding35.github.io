import { Injectable } from '@angular/core';
import { IContentModel, ContentModel } from '../models/content-model';

@Injectable()
export class IdbStorageAccessService {
  idb = this.windowObj.indexedDB;
  indexedDb!: IDBDatabase;
  data: IContentModel[] = [];

  private readonly database = 'Coding35';
  private readonly version = 3;
  private readonly store = 'ContentStore';

  constructor(private windowObj: Window) {
    fetch('../../assets/json/content.json')
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element: IContentModel) => {
        this.data.push(new ContentModel(element));
      });
    });
  }

  init() {
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
    this.indexedDb = event.target.result;
    const transaction = this.indexedDb.transaction([this.store], 'readwrite');
    const objectStore = transaction.objectStore(this.store);
    this.data.forEach((element) => {
      if (objectStore.get(element.id)) {
        transaction.objectStore(this.store).put(element);
      } else {
        transaction.objectStore(this.store).add(element);
      }
    });
  }

  private createDatabase(event: any) {
    this.indexedDb = event.target.result;
    this.setupStore("ContentStore", "content");
    this.setupStore("Sm2Store",  "session");
  }


  private setupStore(store : string, index: string) {
    let objectStore = this.indexedDb.createObjectStore(store, {
      keyPath: 'id',
    });
    objectStore.createIndex(index, index, { unique: false });
    objectStore.transaction.oncomplete = (event: any) => {
      const transaction = this.indexedDb.transaction([store], 'readwrite');
      transaction.oncomplete = (event: any) => {
      };
      transaction.onerror = (event: any) => {
        console.error(`Transaction Error. ${event}`);
      };
    };
  }

  get<T>(id: string, store : string = 'ContentStore'): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      let request = this.idb.open(this.database, this.version);
      request.onsuccess = (event: any) => {
        this.indexedDb = event?.target?.result;
        this.indexedDb
          .transaction(store)
          .objectStore(store)
          .get(id).onsuccess = (event: any) => {
          resolve(event.target.result as T);
        };
        onerror = (event: any) => {
          reject(event);
        };
      };
    });
  }

  getAll<T>(store : string = 'ContentStore'): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      let request = this.idb.open(this.database, this.version);
      request.onsuccess = (event: any) => {
        this.indexedDb = event?.target?.result;
        this.indexedDb
          .transaction(store)
          .objectStore(store)
          .getAll().onsuccess = (event: any) => {
          resolve(event.target.result as T);
        };
        onerror = (event: any) => {
          reject(event);
        };
      };
    });
  }

  insert<T>(item: T, store : string): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      let request = this.idb.open(this.database, this.version);
      request.onsuccess = (event: any) => {
        this.indexedDb = event?.target?.result;
        this.indexedDb
          .transaction(store, 'readwrite')
          .objectStore(store)
          .add(item).onsuccess = (event: any) => {
          resolve(event.target.result as T);
        };
        onerror = (event: any) => {
          reject(event);
        };
      };
    });
  }

  update<T>(item: T, store: string): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      let request = this.idb.open(this.database, this.version);
      request.onsuccess = (event: any) => {
        this.indexedDb = event?.target?.result;
        this.indexedDb
          .transaction(store, 'readwrite')
          .objectStore(store)
          .put(item).onsuccess = (event: any) => {
          resolve(event.target.result as T);
        };
        onerror = (event: any) => {
          reject(event);
        };
      };
    });
  }

  clear(store : string): Promise<void> {
    return new Promise((resolve, reject) => {
      let request = this.idb.open(this.database, this.version);
      request.onsuccess = (event: any) => {
        this.indexedDb = event?.target?.result;
        this.indexedDb
          .transaction(store, 'readwrite')
          .objectStore(store)
          .clear().onsuccess = (event: any) => {
          resolve(event.target.result);
        };
        onerror = (event: any) => {
          reject(event);
        };
      };
    });
  }
}


