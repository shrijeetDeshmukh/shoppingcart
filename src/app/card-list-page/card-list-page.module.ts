import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardListPagePageRoutingModule } from './card-list-page-routing.module';

import { CardListPagePage } from './card-list-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardListPagePageRoutingModule
  ],
  declarations: [CardListPagePage]
})
export class CardListPagePageModule {}
