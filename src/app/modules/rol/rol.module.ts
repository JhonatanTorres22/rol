import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolRoutingModule } from './rol-routing.module';
import { ListarUsuarioConRolComponent } from './listar-usuario-con-rol/listar-usuario-con-rol.component';
import { AddEditUsuarioConRolComponent } from './add-edit-usuario-con-rol/add-edit-usuario-con-rol.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//angular material
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';

import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    ListarUsuarioConRolComponent,
    AddEditUsuarioConRolComponent
  ],
  imports: [
    CommonModule,
    RolRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatSelectModule
  ],
  exports: [
    ListarUsuarioConRolComponent
  ]
})
export class RolModule { }
