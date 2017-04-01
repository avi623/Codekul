import { User } from './user';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/Rx';

@Injectable()
export class HttpService {
  constructor(private http: Http) {

  }

  saveUser(user: User) {
    return this.http.post('https://digital-shelter-153912.firebaseio.com/cust.json', user)
      .map(res => res.json());
  }

  oneUser(id: string) {
    return this.http.get('https://digital-shelter-153912.firebaseio.com/cust/' + id + '.json')
      .map(res => res.json());
  }

  searchByUserName(userName: string) {
    return this.http.get('https://digital-shelter-153912.firebaseio.com/cust.json')
      .map(res => res.json());
  }

  putEx() {
    return this.http.put('https://digital-shelter-153912.firebaseio.com/cust/-Kg9NMjRe_c90Gftsf8l.json', { userName: 'microsoft', mobile: '975112', add: 'pune' });
  }

  deleteByKey() {
    return this.http.delete('https://digital-shelter-153912.firebaseio.com/cust/-Kg9OS-jNfEQJLRulhas.json');
  }
}