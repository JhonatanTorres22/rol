import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-add-edit-usuario-con-rol',
  templateUrl: './add-edit-usuario-con-rol.component.html',
  styleUrls: ['./add-edit-usuario-con-rol.component.scss']
})
export class AddEditUsuarioConRolComponent implements OnInit {
  constructor(
    private dialog:MatDialog
  ){}

  ngOnInit(): void {
  }

  openModal(){
  }
}
