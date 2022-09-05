import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/api-models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseApiUrl = 'https://localhost:44325';

  constructor(private httpClient: HttpClient) { }

  getStudent(): Observable<any>{
    return this.httpClient.get<Student[]>(this.baseApiUrl + '/students');
  }
}
