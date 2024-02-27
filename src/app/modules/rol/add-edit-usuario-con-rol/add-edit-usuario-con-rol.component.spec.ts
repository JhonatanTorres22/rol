import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditUsuarioConRolComponent } from './add-edit-usuario-con-rol.component';

describe('AddEditUsuarioConRolComponent', () => {
  let component: AddEditUsuarioConRolComponent;
  let fixture: ComponentFixture<AddEditUsuarioConRolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditUsuarioConRolComponent]
    });
    fixture = TestBed.createComponent(AddEditUsuarioConRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
