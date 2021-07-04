import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }


  post(url: string,data: any,isHeader: any = false,headers = null){
    return this.http.post(url,data,isHeader && headers);
  }
  get(url: string,isHeader: any = false,headers = null){
    return this.http.get(url,isHeader && headers);
  }
  put(url: string,data: any,isHeader: any = false,headers = null){
    return this.http.put(url,data,isHeader && headers);
  }
}
