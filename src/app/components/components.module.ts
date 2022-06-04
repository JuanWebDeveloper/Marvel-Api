import { NgModule } from '@angular/core';

//? Import of the components used in the application.
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, HomeComponent],
  exports: [NavbarComponent, FooterComponent, HomeComponent],
  imports: [],
  providers: [],
})
export class ComponentsModule {}
