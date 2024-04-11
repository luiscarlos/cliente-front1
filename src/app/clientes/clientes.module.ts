import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormsModule} from '@angular/forms'
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { catchError } from 'rxjs/operators';



import { ClientesService } from '../clientes.service';


@NgModule({
  declarations: [
    ClientesFormComponent
  ],

  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule,

  ],

  exports:[
    ClientesFormComponent
  ]
})
export class ClientesModule { }
