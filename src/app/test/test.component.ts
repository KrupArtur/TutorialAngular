import { Component, OnInit, Input, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, empty } from 'rxjs';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
@Injectable()
export class TestComponent implements OnInit {

  courses: Map<Number, String>;
  _Question2: any;
  private categorie = 'A';
  _questions = new Array(
    new Question('Test kategoria A', 'A'),
    new Question('Test kategoria B', 'B'),
    new Question('Test kategoria C', 'C')
  );
  _questionsInTest;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this._questionsInTest = new Array();
      this.getQuestion(params.get('id'));
    });

    this.getAll().subscribe(data => {
      this._Question2 = data;
    });
  }

  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/object/' + this.categorie);
  }

  getQuestion(categorie: String): any {
    this._questions.forEach(_question => {
      if (_question.categorie === categorie) {
        this._questionsInTest.push(_question);
    }});
  }

}
export class Question {
  constructor(public name: String, public categorie: String) {
    this.name = name;
    this.categorie = categorie;
  }

}

// tslint:disable-next-line:class-name
export class _Question2 {

  constructor(public nameQuestion: String, public numberQuestion: String, public questionPL: String,
    public answerPL: Answer, public questionENG: String, public answerENG: Answer,
    public questionDE: String, public answerDE: Answer, public correctAnswer: String,
    public img: String, public abbreviation: String, public pkt: String, public category: String) {
    this.nameQuestion = nameQuestion;
    this.numberQuestion = numberQuestion;
    this.questionPL = questionPL;
    this.answerPL = answerPL;
    this.questionENG = questionENG;
    this.answerENG = answerENG;
    this.questionDE = questionDE;
    this.answerDE = answerDE;
    this.correctAnswer = correctAnswer;
    this.img = img;
    this.abbreviation = abbreviation;
    this.pkt = pkt;
    this.category = category;
  }
}
 export class Answer {
   constructor(public answer1: String, public answer2: String, public answer3: String) {
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
   }

 }
