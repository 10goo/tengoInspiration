import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QuoteDataService {

  constructor(public db: AngularFirestore) { }

  getData(): Observable<any[]> {
    return this.db.collection('quotes').valueChanges();
  }

}
