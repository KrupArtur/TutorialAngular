import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Questions, Answer } from '../model/questions';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-lerning',
  templateUrl: './lerning.component.html',
  styleUrls: ['./lerning.component.css']
})
export class LerningComponent {

  buttonYes = '#f5f5f5';
  buttonNo = '#f5f5f5';
  buttonAnswer1 = '#f5f5f5';
  buttonAnswer2 = '#f5f5f5';
  buttonAnswer3 = '#f5f5f5';

  numberQuestion = 0;
  listQuestions: Set<Questions>;

  constructor(private route: ActivatedRoute, private httpService: HttpService) {
    this.route.paramMap.subscribe(params => {
      this.getQuestionsForCategory(params.get('id'));
    });
  }

  getQuestionsForCategory(category: string) {
    this.httpService.getQuestionsForCategory(category).subscribe((q: Set<Questions>) => {
      this.listQuestions = q;
    });
  }

  getAnswerPL() {
    const lisAnswer: Array<Answer> = this.getQuestions().answer;
    for (const answer of lisAnswer) {
      return answer;
    }
  }

  public getQuestions() {
    try {
      return this.listQuestions[this.numberQuestion];
    } catch (error) { }
  }

  onKey(event: any) {
    this.numberQuestion = 1;
    this.numberQuestion = event.target.value - 1;
    if (event.target.value < 1) {
      this.numberQuestion = 0;
    }
  }

  getNumberQuestion() {
    return this.numberQuestion + 1;
  }

  nextQuestion() {
    this.numberQuestion++;
    this.buttonYes = '#f5f5f5';
    this.buttonNo = '#f5f5f5';
    this.buttonAnswer1 = '#f5f5f5';
    this.buttonAnswer2 = '#f5f5f5';
    this.buttonAnswer3 = '#f5f5f5';
  }

  prevQuestion() {
    if (this.numberQuestion > 0) {
      this.numberQuestion -= 1;
      this.buttonYes = '#f5f5f5';
      this.buttonNo = '#f5f5f5';
      this.buttonAnswer1 = '#f5f5f5';
      this.buttonAnswer2 = '#f5f5f5';
      this.buttonAnswer3 = '#f5f5f5';
    }
  }

  answer1isNoTEmpty() {
    try {
      return this.getQuestions().answer !== null && this.getQuestions().answer.answer1 === '' ? true : false;
    } catch {

    }
  }

  answer3isNoTEmpty() {
    return this.getQuestions().answer.answer3 === '' ? true : false;
  }

  answer() {
    switch (this.listQuestions[this.numberQuestion].correctAnswer) {
      case 'T':
        this.buttonYes = '#4cbb5e';
        this.buttonNo = '#e94343';
        break;
      case 'N':
        this.buttonYes = '#e94343';
        this.buttonNo = '#4cbb5e';
        break;
      case 'A':
        this.buttonAnswer1 = '#4cbb5e';
        this.buttonAnswer2 = '#e94343';
        this.buttonAnswer3 = '#e94343';
        break;
      case 'B':
        this.buttonAnswer1 = '#e94343';
        this.buttonAnswer2 = '#4cbb5e';
        this.buttonAnswer3 = '#e94343';
        break;
      case 'C':
        this.buttonAnswer1 = '#e94343';
        this.buttonAnswer2 = '#e94343';
        this.buttonAnswer3 = '#4cbb5e';
        break;
      default:
        this.buttonYes = '#f5f5f5';
        this.buttonNo = '#f5f5f5';
        this.buttonAnswer1 = '#f5f5f5';
        this.buttonAnswer2 = '#f5f5f5';
        this.buttonAnswer3 = '#f5f5f5';
        break;
    }
  }
}
