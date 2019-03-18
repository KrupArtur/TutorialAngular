import { Answer } from "./answer";

export class Question {
    constructor(public nameQuestion: String, public numberQuestion: String, public questionPL: String,
        public answerPL: Answer, public questionENG: String, public answerENG: Answer,
        public questionDE: String, public answerDE: Answer, public correctAnswer: String,
        public img: String, public abbreviation: String, public pkt: String, public category: String) {
        this.nameQuestion;
        this.numberQuestion;
        this.questionPL;
        this.answerPL;
        this.questionENG;
        this.answerENG;
        this.questionDE;
        this.answerDE;
        this.correctAnswer;
        this.img;
        this.abbreviation;
        this.pkt;
        this.category;
      }
}
