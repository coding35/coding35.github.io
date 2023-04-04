import { Injectable } from '@angular/core';
import { IFlashCard } from '../interface/IFlashCard';

@Injectable()
export class IdbSm2StorageAccessService {
  idb = this.windowObj.indexedDB;
  indexedDb!: IDBDatabase;
  data: any[] = [];

  private readonly database = 'Coding35SM2';
  private readonly version = 1;
  private readonly store = 'SM2Store';

  constructor(private windowObj: Window) {}

  init() {
    let request = this.idb.open(this.database, this.version);

    request.onsuccess = (event: any) => {
      console.log('Success opening SM2 DB');
    };

    request.onerror = (event: any) => {
      console.log('Error opening SM2 DB');
    };

    request.onupgradeneeded = (event: any) => {
      this.createDatabase(event);
    };
  }

  update(card: IFlashCard): Promise<IFlashCard> {
    return new Promise((resolve, reject) => {
      let request = this.idb.open(this.database, this.version);
      request.onsuccess = (event: any) => {
        this.indexedDb = event?.target?.result;
        this.indexedDb
          .transaction(this.store, 'readwrite')
          .objectStore(this.store)
          .put(card).onsuccess = (event: any) => {
          resolve(event.target.result);
        };
        onerror = (event: any) => {
          reject(event);
        };
      };
    });
  }

  insert(card: IFlashCard): Promise<IFlashCard> {
    return new Promise((resolve, reject) => {
      let request = this.idb.open(this.database, this.version);
      request.onsuccess = (event: any) => {
        this.indexedDb = event?.target?.result;
        this.indexedDb
          .transaction(this.store, 'readwrite')
          .objectStore(this.store)
          .add(card).onsuccess = (event: any) => {
          resolve(event.target.result);
        };
        onerror = (event: any) => {
          reject(event);
        };
      };
    });
  }

  clear(): Promise<void> {
    return new Promise((resolve, reject) => {
      let request = this.idb.open(this.database, this.version);
      request.onsuccess = (event: any) => {
        this.indexedDb = event?.target?.result;
        this.indexedDb
          .transaction(this.store, 'readwrite')
          .objectStore(this.store)
          .clear().onsuccess = (event: any) => {
          resolve(event.target.result);
        };
        onerror = (event: any) => {
          reject(event);
        };
      };
    });
  }

  private createDatabase(event: any) {
    console.log('Creating SM2 DB');
    this.indexedDb = event.target.result;

    let objectStore = this.indexedDb.createObjectStore(this.store, {
      keyPath: 'id',
    });
    objectStore.createIndex('session', 'session', { unique: false });

    objectStore.transaction.oncomplete = (event: any) => {
      console.info('Create SM2 Database Transaction Complete.');
      const transaction = this.indexedDb.transaction([this.store], 'readwrite');
      transaction.oncomplete = (event: any) => {
        console.info('Transaction Complete.');
      };
      transaction.onerror = (event: any) => {
        console.error(`Transaction Error. ${event}`);
      };
    };
  }

  get(id: string): Promise<IFlashCard> {
    return new Promise((resolve, reject) => {
      let request = this.idb.open(this.database, this.version);
      request.onsuccess = (event: any) => {
        this.indexedDb = event?.target?.result;
        this.indexedDb
          .transaction(this.store, 'readonly')
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

  getAll(): Promise<IFlashCard[]> {
    return new Promise((resolve, reject) => {
      let request = this.idb.open(this.database, this.version);
      request.onsuccess = (event: any) => {
        this.indexedDb = event?.target?.result;
        this.indexedDb
          .transaction(this.store, 'readonly')
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
