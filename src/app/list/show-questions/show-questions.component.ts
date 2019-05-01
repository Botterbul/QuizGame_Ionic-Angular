import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-show-questions',
  templateUrl: './show-questions.component.html',
  styleUrls: ['./show-questions.component.scss'],
})
export class ShowQuestionsComponent implements OnInit {

  public questions =
  [
    { id : 1,
      question : 'Wat is die vraag1',
      answer : 'Antwoord1',
      questionAsked : false
    },
    { id : 2,
      question: 'Wat is die vraag2',
      answer : 'Antwoord2',
      questionAsked : false
    },
    { id : 3,
      question : 'Wat is die vraag3',
      answer : 'Antwoord3',
      questionAsked : false
    },
    { id : 4,
      question : 'Wat is die vraag4',
      answer : 'Antwoord4',
      questionAsked : false
    },
    { id : 5,
      question : 'Wat is die vraag5',
      answer : 'Antwoord5',
      questionAsked : false
    },
    { id : 6,
      question : 'Wat is die vraag6',
      answer : 'Antwoord6',
      questionAsked : false
    },
    { id : 7,
      question : 'Wat is die vraag7',
      answer : 'Antwoord7',
      questionAsked : false
    },
    { id : 8,
      question: 'Wat is die vraag8',
      answer : 'Antwoord8',
      questionAsked : false
    },
    { id : 9,
      question : 'Wat is die vraag9',
      answer : 'Antwoord9',
      questionAsked : false
    },
    { id : 10,
      question : 'Wat is die vraag10',
      answer : 'Antwoord10',
      questionAsked : false
    }
  ];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    var random1 = this.questions[Math.floor(Math.random() * this.questions.length)];
    while (random1.questionAsked === true)
    {
      random1 = this.questions[Math.floor(Math.random() * this.questions.length)];
    }
    var random2 = this.questions[Math.floor(Math.random() * this.questions.length)];
    while ((random2.questionAsked === true) ||  (random1.id === random2.id))
    {
      random2 = this.questions[Math.floor(Math.random() * this.questions.length)];
    }
    // Moet nog hier stel dat ons die waarde van dit moet verander dan na true (want vraag is klaar gevra)
    document.getElementById("random1Question").innerHTML = random1.question;
    document.getElementById("random1Answer").innerHTML = random1.answer;
    document.getElementById("random2Question").innerHTML = random2.question;
    document.getElementById("random2Answer").innerHTML = random2.answer;
    if (this.questions[random1.id].questionAsked === false) {
      this.questions[random1.id].questionAsked = true;
    }
    if (this.questions[random2.id].questionAsked === false) {
      this.questions[random2.id].questionAsked = true;
    }
  }

  onCancel() {
    this.modalCtrl.dismiss();
  }

}
