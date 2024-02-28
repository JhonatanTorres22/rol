import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { fromEvent } from 'rxjs';
import { EliminarUsuarioConPerfil, ListarUsuarioConPerfil } from 'src/app/core/models/rol.model';
import { RolService } from 'src/app/infraestructura/services/rol.service';
import Swal from 'sweetalert2';
import { AddEditUsuarioConRolComponent } from '../add-edit-usuario-con-rol/add-edit-usuario-con-rol.component';

@Component({
  selector: 'app-listar-usuario-con-rol',
  templateUrl: './listar-usuario-con-rol.component.html',
  styleUrls: ['./listar-usuario-con-rol.component.scss']
})
export class ListarUsuarioConRolComponent implements OnInit, OnDestroy {
  loading : boolean = false;
  modalAbierto : boolean = false;
  displayedColumns: string[] = ['nombres', 'apellidoPaterno', 'apellidoMaterno', 'nDocumento','perfil', 'acciones'];
  dataSource:MatTableDataSource<ListarUsuarioConPerfil>;

  constructor(
    private ngZone: NgZone,
    private dialog: MatDialog,
    private rolService:RolService
  ){
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.listarUsuarioConPerfil();
    this.loading = true;
    window.addEventListener('abrirModal', (event: Event) => {
      this.ngZone.run(() => {
        this.openModal(event as CustomEvent<any>);
      });
  });
  }

  ngOnDestroy(): void {
    window.removeEventListener('abrirModal', (event: Event) => {
      this.openModal(event as CustomEvent<any>);
  });
  }
  openModal(event:CustomEvent):void{
    if(!this.modalAbierto){
      this.modalAbierto = true;
      console.log('Modal abierto con mensaje:' , event.detail.mensaje);
      const dialogRef = this.dialog.open(AddEditUsuarioConRolComponent, {
        disableClose: true,
        width: '600px',
        data: { mensaje: event.detail.mensaje}
      });
      dialogRef.afterClosed().subscribe(result => {
        if(result == 'Guardar'){
          setTimeout(() => {
            console.log('guardando....');
            this.listarUsuarioConPerfil();
          }, 300);
        }
        else {
          console.log('CERRANDO MODAL...');
        }
        this.modalAbierto = false;
      });
    }
    else{
      console.log('YA ESTÁ ABIERTO');
    }
  }

  listarUsuarioConPerfil(){
    this.rolService.listarUsuarioConPerfil().subscribe({
      next: (data:ListarUsuarioConPerfil[]) =>{
        this.loading = false
        this.dataSource.data = data;
        console.log(this.dataSource.data);
      }
    })
  }

  eliminarUsuarioConPerfil(usuarioConPerfil: ListarUsuarioConPerfil){
    Swal.fire({
      icon: 'question',
      title: '¿ELIMINAR?',
      text: `¿ESTÁ SEGURO QUE DESEA ELIMINAR A ${usuarioConPerfil.apellidoPaterno} ${usuarioConPerfil.apellidoMaterno} ${usuarioConPerfil.nombres} CON EL PERFIL ${usuarioConPerfil.perfil} ?`,
      showCancelButton: true,
      confirmButtonText: "ELIMINAR",
      cancelButtonText: "CANCELAR",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if(result.isConfirmed){
        this.rolService.eliminarUsuario(usuarioConPerfil.codigoPersonaPerfil).subscribe({
          next: (eliminar:EliminarUsuarioConPerfil) => {
            Swal.fire({
              icon: 'success',
              title:'¡ELIMINADO!',
              text: `EL USUARIO ${usuarioConPerfil.apellidoPaterno} ${usuarioConPerfil.apellidoMaterno} ${usuarioConPerfil.nombres} CON EL PERFIL ${usuarioConPerfil.perfil} FUE ELIMINADO CORRECTAMENTE`
            })
            this.listarUsuarioConPerfil();
          }
        })
      }
    })
  }

}
