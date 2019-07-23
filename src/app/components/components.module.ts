import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from "@angular/common";

import { FooterComponent } from './footer/footer.component';
import { CardsComponent } from './cards/cards.component'

@NgModule({
  declarations: [FooterComponent, CardsComponent],
  imports: [IonicModule, CommonModule],
  exports: [FooterComponent, CardsComponent]
})

export class ComponentsModule {}
