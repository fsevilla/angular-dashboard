import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string = `${environment.api}users`;

  constructor(private httpClient: HttpClient) { }

  getUsers():Promise<any> {
    return this.httpClient.get(this.url).toPromise();
  }

  getUserDetails(id:number) {
    let url = `${this.url}/${id}`;
    return this.httpClient.get(url).toPromise();
  }
}
