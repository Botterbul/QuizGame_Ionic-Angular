import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ListService } from '../list.service';

@Component({
  selector: 'app-show-questions-h',
  templateUrl: './show-questions-h.component.html',
  styleUrls: ['./show-questions-h.component.scss'],
})
export class ShowQuestionsHComponent implements OnInit {

  constructor(private modalCtrl: ModalController, private listService: ListService) {
  }

  ngOnInit() {
    var random1 = this.listService.questions[Math.floor(Math.random() * this.listService.questions.length)];
    while (random1.questionAsked === 'true')
    {
      random1 = this.listService.questions[Math.floor(Math.random() * this.listService.questions.length)];
    }
    var random2 = this.listService.questions[Math.floor(Math.random() * this.listService.questions.length)];
    while ((random2.questionAsked === 'true') ||  (random1.id === random2.id))
    {
      random2 = this.listService.questions[Math.floor(Math.random() * this.listService.questions.length)];
    }
    // Moet nog hier stel dat ons die waarde van dit moet verander dan na true (want vraag is klaar gevra)
    
    document.getElementById("random1Question").innerHTML = random1.question;
    document.getElementById("random1Answer").innerHTML = random1.answer;
    document.getElementById("random2Question").innerHTML = random2.question;
    document.getElementById("random2Answer").innerHTML = random2.answer;
    this.listService.questions[random1.id].questionAsked = 'true';
    this.listService.questions[random2.id].questionAsked = 'true';
  }

  onCancel() {
    this.modalCtrl.dismiss();
  }
}
