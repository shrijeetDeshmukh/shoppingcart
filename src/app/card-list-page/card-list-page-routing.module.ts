import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardListPagePage } from './card-list-page.page';

const routes: Routes = [
  {
    path: '',
    component: CardListPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardListPagePageRoutingModule {}
