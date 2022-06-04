import { NgModule } from '@angular/core';

//? Import of the components used in the application.
import { NavbarComponent } from '../shared/navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  imports: [],
  providers: [],
})
export class ComponentsModule {}
