import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';
import { Questions, Question, Answer } from '../model/questions';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

@Injectable()
export class TestComponent implements OnInit {

  public numberQuestion = 0;
  resultTest;
  yourAnswer: String;
  buttonYes = '#f5f5f5';
  buttonNo = '#f5f5f5';
  buttonAnswerA = '#f5f5f5';
  buttonAnswerB = '#f5f5f5';
  buttonAnswerC = '#f5f5f5';

  _questions: Array<Categorie> = new Array(
    { name: 'Test kategoria A', categorie: 'A' },
    { name: 'Test kategoria B', categorie: 'B' },
    { name: 'Test kategoria c', categorie: 'c' },
  );

  endtest = false;
  userAnswer: Array<saveAnswer> = new Array();
  map: Map<number, String> = new Map();
  _questionsInTest;
  question: Question;

  listQuestions: Set<Questions>;

  constructor(private route: ActivatedRoute, private httpService: HttpService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.getTestQuestions(params.get('id'));
    });
  }

  getTestQuestions(category: string) {
    return this.httpService.getQuestionsForTest(category).subscribe(question => {
      this.listQuestions = question;
    });
  }

  getQuestion(categorie: String) {
    this._questions.forEach(_question => {
      _question.categorie === categorie ? this._questionsInTest.push(_question) : null
    });
  }

  getQuestions(): Questions {
    try {
      return this.listQuestions[this.numberQuestion];
    } catch (error) { }
  }

  getAnswerPL() {
    const lisAnswer: Array<Answer> = this.getQuestions().answer;
    for (const answer of lisAnswer) {
      if (answer.language === 'PL') {
        return answer;
      }
    }
  }

  getNumberQuestion() {
    return this.numberQuestion + 1;
  }

  endTest() {
    this.endtest = true;
    this.resultTest = this.isComplited();
    this.answerGood();
    this.yourAnswer = this.map.get(this.numberQuestion) === '' ? '' : this.map.get(this.numberQuestion);

  }

  isComplited() {
    let pkt;
    let result;
    if (this.endtest) {
      let i = 0;
      this.listQuestions.forEach(question => {
        question.correctAnswer === this.map.get(i++) ? pkt += Number(question.pkt) : null;
      });
    }
    if (pkt < 68) {
      result = 'Zdałeś';
    } else {
      result = 'Nie zdałeś';
    }
    return result;
  }

  allButtonSetColor() {
    this.buttonYes = '#f5f5f5';
    this.buttonNo = '#f5f5f5';
    this.buttonAnswerA = '#f5f5f5';
    this.buttonAnswerB = '#f5f5f5';
    this.buttonAnswerC = '#f5f5f5';
  }

  nextQuestion() {
    console.log(this.listQuestions[this.numberQuestion].correctAnswer);
    if (this.numberQuestion < 29) {
      this.numberQuestion++;
      if (!this.endtest) {
        this.allButtonSetColor();
        if (this.map.get(this.numberQuestion) !== null) {
          this.answer(this.map.get(this.numberQuestion));
        }
      } else {
        this.answerGood();
        this.yourAnswer = this.map.get(this.numberQuestion);
      }
    }
  }

  prevQuestion() {
    if (this.numberQuestion > 0) {
      this.numberQuestion -= 1;
      if (!this.endtest) {
        this.allButtonSetColor();
        if (this.map.get(this.numberQuestion) !== null)
          this.answer(this.map.get(this.numberQuestion))
      } else {
        this.answerGood();
        // this.yourAnswer = this.map.get(this.numberQuestion);
      }
    }
  }

  checkIfAnswerIstEmpty() {
    try {
      switch (this.getQuestions().correctAnswer) {
        case 'N':
          return false;
        case 'T':
          return false;
        default:
          return true;
      }


    } catch (error) { }

  }

  answerGood() {
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
        this.buttonAnswerA = '#4cbb5e';
        this.buttonAnswerB = '#e94343';
        this.buttonAnswerC = '#e94343';
        break;
      case 'B':
        this.buttonAnswerA = '#e94343';
        this.buttonAnswerB = '#4cbb5e';
        this.buttonAnswerC = '#e94343';
        break;
      case 'C':
        this.buttonAnswerA = '#e94343';
        this.buttonAnswerB = '#e94343';
        this.buttonAnswerC = '#4cbb5e';
        break;
      default:
        this.allButtonSetColor();
        break;
    }
  }

  answer(answer: String) {
    if (!this.endtest) {
      switch (answer) {
        case 'T':
          this.map.set(this.numberQuestion, 'T');
          this.buttonNo = '#f5f5f5';
          this.buttonYes = '#4cbb5e';
          break;
        case 'N':
          this.map.set(this.numberQuestion, 'N');
          this.buttonNo = '#4cbb5e';
          this.buttonYes = '#f5f5f5';
          break;
        case 'A':
          this.map.set(this.numberQuestion, 'A');
          this.buttonAnswerA = '#4cbb5e';
          this.buttonAnswerB = '#f5f5f5';
          this.buttonAnswerC = '#f5f5f5';
          break;
        case 'B':
          this.map.set(this.numberQuestion, 'B');
          this.buttonAnswerA = '#f5f5f5';
          this.buttonAnswerB = '#4cbb5e';
          this.buttonAnswerC = '#f5f5f5';
          break;
        case 'C':
          this.map.set(this.numberQuestion, 'C');
          this.buttonAnswerA = '#f5f5f5';
          this.buttonAnswerB = '#f5f5f5';
          this.buttonAnswerC = '#4cbb5e';
          break;
        default:
          this.allButtonSetColor();
          break;
      }
    }
  }
}

export class Categorie {
  constructor(public name: String, public categorie: String) {
    this.name = name;
    this.categorie = categorie;
  }
}

export class saveAnswer {
  constructor(public nrQuestion: Number, public answer: String, public goodAnswer: String) {
    this.nrQuestion = nrQuestion;
    this.answer = answer;
    this.goodAnswer = goodAnswer;
  }
}
