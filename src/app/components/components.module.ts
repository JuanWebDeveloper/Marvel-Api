import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//? Import of the components used in the application.
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { CardComponent } from '../shared/card/card.component';
import { HomeComponent } from './home/home.component';
import { CharacterComponent } from './character/character.component';
import { ComicComponent } from './comic/comic.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CardComponent,
    HomeComponent,
    CharacterComponent,
    ComicComponent,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    CardComponent,
    HomeComponent,
    CharacterComponent,
  ],
  imports: [BrowserModule],
  providers: [],
})
export class ComponentsModule {}
