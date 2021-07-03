import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpservice: HttpService) { }
  static url = "https:localhost/44349/api"

  registration(data:any) {
    // return this.httpservice.post(`${UserService.url}/user/register`,data);
    return this.httpservice.post(`http://localhost:3000/users`,data);
  }
  login(data:any) {
    return this.httpservice.post(`${UserService.url}/user/login`,data);
  }
}
