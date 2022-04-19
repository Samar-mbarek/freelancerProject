import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Freelancer } from '../models/freelancer';

@Injectable({
  providedIn: 'root'
})
export class FreelancerService {

  constructor(private http: HttpClient) { }
  API_URI = 'http://localhost:3003/api/freelancer';

  getFreelancers(): Observable<any> {
    return this.http.get<Freelancer[]>(`${this.API_URI}/findAll`)
  }

}
