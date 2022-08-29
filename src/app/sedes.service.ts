import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SedesService {
  messages: string[] = [];
  add(message: string) {
    
    this.messages.push(message);
    }
  constructor(private http: HttpClient) {}
    
   
   getUsers() {
    this.http.get("https://codingpotions.com/angular-oninit");}
}
