import { Component, OnInit, Input, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from "./model/question";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
@Injectable()
export class TestComponent implements OnInit {

  questions: Array<Question>;
  _questionsInTest;
  private categorie = 'A';
  question: Question;
  i: number = 0; 
  _questions = new Array(
    new Question2('Test kategoria A', 'A'),
    new Question2('Test kategoria B', 'B'),
    new Question2('Test kategoria C', 'C')
  )    
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this._questionsInTest = new Array();
      this.getQuestion(params.get("id"));
    })

    this.getAll().subscribe(data => {
      this.questions = data;
    });  
  
  }

  getAll(): Observable<any> {
    return this.http.get('//localhost:9002/object/' + this.categorie);
  }

  getQuestion(categorie: String) {
    this._questions.forEach(_question => {
    _question.categorie == categorie ? this._questionsInTest.push(_question) : null
    });    
    
  }  
 
  public getQuestions(index: number){ 
      return this.questions[index];
  }

  nextQuestion(){
    this.i+=1;
  }
  prevQuestion(){
    if(this.i >= 0)
      this.i-=1;
  }

}
export class Question2 {
  constructor(public name: String, public categorie: String) {
    this.name = name;
    this.categorie = categorie;
  }

}
