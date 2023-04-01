import { Component, OnInit } from '@angular/core';
import { ContentModel, IContentModel } from './shared/models/content-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'coding35';

  /* ngOnInit(): void {
    let db: any;

    let indexedDB = window.indexedDB;
    const request = indexedDB.open('Coding35Db', 1);

    request.onerror = (event) => {
      console.log('IndexedDB database not found');
    };

    request.onsuccess = (event: any) => {
      db = event.target.result;
      console.log('IndexedDB database found');
      getData();
    };

    request.onupgradeneeded = (event: any) => {
      const db = event.target.result;
      let objectStore = db.createObjectStore('ContentStore', {
        keyPath: 'id',
        autoIncrement: true,
      });
      type keysOfProps = Array<keyof IContentModel>;
      const propsArray: keysOfProps = Object.keys(
        new ContentModel()
      ) as keysOfProps;

       propsArray.forEach((property) => {
        if (property !== 'id') {
          objectStore.createIndex(property, property, { unique: false });
        } else {
          objectStore.createIndex(property, property, { unique: true });
        }
      });



      objectStore.transaction.oncomplete = (event: any) => {
        console.info('Create Database Transaction Complete.');
      };
    };

    const fetchData = function (objectStore : any) {
      fetch('../../assets/json/content.json')
        .then((response) => response.json())
        .then((data) => {
          data.forEach((element: any) => {
            const request = objectStore.add(element);
            request.onsuccess = (event: any) => {
              console.log('Successful Insert.');
            };
            request.onerror = (event: any) => {
              console.log('Unsuccessful Insert.');
            };
          });
        });
    };

    const getData = function () {
      const transaction = db.transaction(['ContentStore'], 'readwrite');

      transaction.oncomplete = (event: any) => {
        console.info('Transaction Complete.');
      };

      transaction.onerror = (event: any) => {
        console.error(`Transaction Error. ${event}`);
      };

      const objectStore = transaction.objectStore('ContentStore');

      objectStore.count().onsuccess = function (event: any) {
        var total = event.target.result;
        if (total === 0) {
          fetch('../../assets/json/content.json')
          .then((response) => response.json())
          .then((data) => {
            data.forEach((element: any) => {
              const request = objectStore.add(element.id, "555");
              request.onsuccess = (event: any) => {
                console.log('Successful Insert.');
              };
              request.onerror = (event: any) => {
                console.log('Unsuccessful Insert.');
              };
            });
          });
        }
      };
    }; 
  }*/
}
