import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpservice: HttpService) { }
  static url = "https:localhost/44354/api"
  httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
    })
  };
  registration(data:any) {
    // return this.httpservice.post(`${UserService.url}/user/register`,data);
    return this.httpservice.post(`http://localhost:3000/users`,data);
  }
  login(data:any) {
    return this.httpservice.post(`${UserService.url}/users/login`,data,this.httpOptions.headers);
  }
}
