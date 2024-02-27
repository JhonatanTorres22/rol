import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarUsuarioConRolComponent } from './listar-usuario-con-rol.component';

describe('ListarUsuarioConRolComponent', () => {
  let component: ListarUsuarioConRolComponent;
  let fixture: ComponentFixture<ListarUsuarioConRolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarUsuarioConRolComponent]
    });
    fixture = TestBed.createComponent(ListarUsuarioConRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
