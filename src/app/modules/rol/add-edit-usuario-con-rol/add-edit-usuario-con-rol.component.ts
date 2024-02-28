import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AgregarPerfilConUsuario, ListarRol } from 'src/app/core/models/rol.model';
import { RolService } from 'src/app/infraestructura/services/rol.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-edit-usuario-con-rol',
  templateUrl: './add-edit-usuario-con-rol.component.html',
  styleUrls: ['./add-edit-usuario-con-rol.component.scss']
})
export class AddEditUsuarioConRolComponent implements OnInit {
  nombres!: string;
  idPersona!: number
  operacion :string  = 'AGREGAR'
  formUsuarioConRol!: FormGroup
  listarRol!: ListarRol[];
  perfilSeleccionado: ListarRol | null = null;
  
  constructor(
    private dialogRef: MatDialogRef<AddEditUsuarioConRolComponent>,
    private rolService:RolService,
    private fb:FormBuilder,
    private dialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any, 
  ){

    this.formUsuarioConRol = fb.group({
      codigoPerfil: [''],
      codigoPersona: ['', Validators.required],
    })
  }

  ngOnInit(): void {
   this.idPersona = this.data.mensaje.idPersona,
   this.nombres = this.data.mensaje.nombres + ' ' + this.data.mensaje.apellidoPaterno + ' ' + this.data.mensaje.apellidoMaterno;

   this.listarPerfil()
  }

  guardar(){
    let agregarPerfil:AgregarPerfilConUsuario = {
      codigoPerfil: this.formUsuarioConRol.value.codigoPerfil,
      codigoPersona: this.data.mensaje.idPersona
    }
    Swal.fire({
      icon: 'question',
      title: '¿CONFIRMAR?',
      text: '¿ESTÁ SEGURO QUE DESEA GUARDAR LOS CAMBIOS?'
    }).then((result) => {
      if(result.isConfirmed){
        this.rolService.agregarPerfilConUsuario(agregarPerfil).subscribe({
          next:(agregarPerfil:AgregarPerfilConUsuario) => {
            Swal.fire({
              icon: 'success',
              title: '¡CREADO!',
              text: `EL ROL FUE ASIGANADO CORRECTAMENTE`
            })
          }, error: (e) => {
            console.error(e);
          }, complete: () => {this.dialogRef.close('Guardar')}
        })
      }
    })
  }

  listarPerfil(){
    this.rolService.listarPerfil().subscribe({
      next: (data:ListarRol[]) => {
        this.listarRol = data;
        console.log(this.listarRol, 'listar roles');
      }
    })
  }
}
