import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Questions } from '../model/questions';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url: String = 'http://localhost:9001/';

  constructor(private http: HttpClient) { }

  getAllQuestions(): Observable<Array<Questions>> {
    return this.http.get<Array<Questions>>(this.url + 'allQuestions')
  }

  getQuestionsForCategory(category: string): Observable<Set<Questions>> {
    return this.http.get<Set<Questions>>(this.url + 'allQuestions/' + category);
  }

  getQuestionsForTest(category: string): Observable<Set<Questions>> {
    return this.http.get<Set<Questions>>(this.url + '/test/' + category);
  }

}
