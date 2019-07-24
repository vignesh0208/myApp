import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { FooterComponent } from './footer/footer.component';
import { CardsComponent } from './cards/cards.component';
import { ChatpageComponent } from './chatpage/chatpage.component';

@NgModule({
  declarations: [FooterComponent, CardsComponent, ChatpageComponent],
  imports: [IonicModule, CommonModule, FormsModule],
  exports: [FooterComponent, CardsComponent, ChatpageComponent]
})

export class ComponentsModule {}
