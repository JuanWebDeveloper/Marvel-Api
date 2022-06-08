import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

//? Import of the components used in the application.
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { CardComponent } from '../shared/card/card.component';
import { HomeComponent } from './home/home.component';
import { CharacterComponent } from './character/character.component';
import { ComicComponent } from './comic/comic.component';
import { SeriesComponent } from './series/series.component';
import { StorieComponent } from './storie/storie.component';
import { EventComponent } from './event/event.component';
import { CreatorComponent } from './creator/creator.component';
import { LoadingComponent } from '../shared/loading/loading.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CardComponent,
    HomeComponent,
    CharacterComponent,
    ComicComponent,
    SeriesComponent,
    StorieComponent,
    EventComponent,
    CreatorComponent,
    LoadingComponent,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    CardComponent,
    HomeComponent,
    CharacterComponent,
    LoadingComponent,
  ],
  imports: [BrowserModule, RouterModule],
  providers: [],
})
export class ComponentsModule {}
