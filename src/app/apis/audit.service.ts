import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuditService {

  public headers:HttpHeaders= new HttpHeaders({
    'Content-Type':'application/json',
    'Accept':"application/json",
    'Access-Control-Allow-Methods':'GET,POST,PUT,DELETE',
    'Authorization':''
  });
  
  constructor(private http:HttpClient) { }

  public getAudits(pageIndex,pageSize){
    return this.http.get(`http://localhost:3000/public/audits/${pageIndex}/${pageSize}`,{headers :this.headers})
  }

}
