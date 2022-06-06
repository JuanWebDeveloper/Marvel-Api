import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//? Import of the necessary components for the configuration of the routes.
import { HomeComponent } from './components/home/home.component';
import { CharacterComponent } from './components/character/character.component';
import { ComicComponent } from './components/comic/comic.component';
import { SeriesComponent } from './components/series/series.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'character/:id', component: CharacterComponent },
  { path: 'comic/:id', component: ComicComponent },
  { path: 'serie/:id', component: SeriesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
