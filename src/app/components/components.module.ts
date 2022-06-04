import { NgModule } from '@angular/core';

//? Import of the components used in the application.
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  exports: [NavbarComponent, FooterComponent],
  imports: [],
  providers: [],
})
export class ComponentsModule {}
