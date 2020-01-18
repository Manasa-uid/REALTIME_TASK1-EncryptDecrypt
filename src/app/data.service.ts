import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
public url:string = "https://jsonplaceholder.typicode.com/posts"
  constructor(private http:HttpClient) { }
  postInf(id:any):Observable<any[]>{
    return this.http.post<any[]>(this.url,id);
  }

}
