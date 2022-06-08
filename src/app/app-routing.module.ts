import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//? Import of the necessary components for the configuration of the routes.
import { HomeComponent } from './components/home/home.component';
import { CharacterComponent } from './components/character/character.component';
import { ComicComponent } from './components/comic/comic.component';
import { SeriesComponent } from './components/series/series.component';
import { StorieComponent } from './components/storie/storie.component';
import { EventComponent } from './components/event/event.component';
import { CreatorComponent } from './components/creator/creator.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'character/:id', component: CharacterComponent },
  { path: 'comic/:id', component: ComicComponent },
  { path: 'serie/:id', component: SeriesComponent },
  { path: 'storie/:id', component: StorieComponent },
  { path: 'event/:id', component: EventComponent },
  { path: 'creator/:id', component: CreatorComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
