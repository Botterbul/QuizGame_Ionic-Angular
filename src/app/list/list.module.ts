import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ListPage } from './list.page';
import { ShowQuestionsComponent } from './show-questions/show-questions.component';
import { ShowQuestionsHComponent } from './show-questions-h/show-questions-h.component';
import { ShowQuestionsNetComponent } from './show-questions-net/show-questions-net.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListPage
      }
    ])
  ],
  declarations: [ListPage, ShowQuestionsComponent, ShowQuestionsHComponent, ShowQuestionsNetComponent],
  entryComponents: [ShowQuestionsComponent, ShowQuestionsHComponent, ShowQuestionsNetComponent]
})
export class ListPageModule {}
