import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DisciplinasService {
  
  constructor(private http: HttpClient) {
    this.http.get('https://reqres.in/api/users?page=2');
  }
  getUsers(): Observable<any>{
    return this.http.get("https://reqres.in/api/users?page=2")
  }
}
