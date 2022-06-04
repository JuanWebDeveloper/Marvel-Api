import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//? Import of the necessary components for the configuration of the routes.
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
