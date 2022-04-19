import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  API_URI = 'http://localhost:3003/api/client';

  getClient(): Observable<any> {
    return this.http.get<Client[]>(`${this.API_URI}/find`)
  }

}
