import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ShowQuestionsComponent } from './show-questions/show-questions.component';
import { ShowQuestionsHComponent } from './show-questions-h/show-questions-h.component';
import { ShowQuestionsNetComponent } from './show-questions-net/show-questions-net.component';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;

  public iGetal: number;
  public iGetalHardware: number;
  public iGetalNetworking: number;

  constructor(private modalCtrl: ModalController, private listService: ListService) {
    this.iGetalHardware = 0;
    this.iGetal = 0;
    this.iGetalNetworking = 0;
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

  onCompFundClick() {
    this.iGetal = this.iGetal + 2;
    if (this.iGetal < this.listService.questions.length) {
      this.modalCtrl
    .create({
      component: ShowQuestionsComponent})
    .then(modalEl => {
      modalEl.present();
    });
    } else
    {
      alert('All questions about computer fundamentals are already asked, please restart app to start over!');
    }
  }

  onHardwareClick() {
    this.iGetalHardware = this.iGetalHardware + 2;
    if (this.iGetalHardware < this.listService.questions.length) {
      this.modalCtrl
    .create({
      component: ShowQuestionsHComponent})
    .then(modalEl => {
      modalEl.present();
    });
    } else
    {
      alert('All questions about hardware are already asked, please restart app to start over!');
    }
  }

  onNetworkClick() {
    this.iGetalNetworking = this.iGetalNetworking + 2;
    if (this.iGetalNetworking < this.listService.questions.length) {
      this.modalCtrl
    .create({
      component: ShowQuestionsNetComponent})
    .then(modalEl => {
      modalEl.present();
    });
    } else
    {
      alert('All questions about networking are already asked, please restart app to start over!');
    }
  }
}
