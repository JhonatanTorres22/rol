import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from '../../../../../../../persona/mf-persona/src/app/modules/persona/listar-persona/servicio-compartido/comunicacion.service'
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-add-edit-usuario-con-rol',
  templateUrl: './add-edit-usuario-con-rol.component.html',
  styleUrls: ['./add-edit-usuario-con-rol.component.scss']
})
export class AddEditUsuarioConRolComponent implements OnInit {
  constructor(
    private comunicacionService:ComunicacionService,
    private dialog:MatDialog
  ){}

  ngOnInit(): void {
    this.comunicacionService.modalOpened$.subscribe(() => {
      console.log('recibiendo modal');
      this.openModal();
    })
  }

  openModal(){
    this.dialog.open(AddEditUsuarioConRolComponent)
  }
}
