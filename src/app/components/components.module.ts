import { NgModule } from '@angular/core';

//? Import of the components used in the application.
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { CardComponent } from '../shared/card/card.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CardComponent,
    HomeComponent,
  ],
  exports: [NavbarComponent, FooterComponent, CardComponent, HomeComponent],
  imports: [],
  providers: [],
})
export class ComponentsModule {}
