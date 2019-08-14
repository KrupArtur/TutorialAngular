export interface Questions {
  id: number;
  nameQuestion: string;
  numberQuestion: string;
  correctAnswer: string;
  img: string;
  abbreviation: string;
  pkt: string;
  category: string;
  question: Question;
  answer: Array<Answer>;

}

export interface Answer {
  answer1?: string;
  answer2?: string;
  answer3?: string;
  language?: string;
}

export interface Question {
  questionPL: string;
  questionENG: string;
  questionDe: string;
}
