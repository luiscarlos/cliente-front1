import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';


import { ClientesService } from '../clientes.service';


@NgModule({
  declarations: [
    ClientesFormComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule,
    ClientesService,
    NgModule
  ],
  exports:[
    ClientesFormComponent,
    ClientesService,
    FormsModule
  ]
})
export class ClientesModule { }
