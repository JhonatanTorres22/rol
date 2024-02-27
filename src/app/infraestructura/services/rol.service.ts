import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { EliminarUsuarioConPerfil, ListarResponsable, ListarRol, ListarUsuarioConPerfil } from 'src/app/core/models/rol.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { RolMapper } from 'src/app/core/mappers/rol.mappers';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private urlEnviro :string ;
  private urlListarPerfil: string ;
  private urlcrearPerfil: string ;
  private urlListarUsuarioConPerfil: string;
  private urlEliminarUsuarioConPerfil:string;
  private urlListarResponsables:string;


  constructor( private httpClient:HttpClient ) {

    this.urlEnviro = environment.EndPoint;
    this.urlListarPerfil = 'api/Perfil/Listar';
    this.urlcrearPerfil = 'api/PersonaPerfil/Insertar';
    this.urlListarUsuarioConPerfil = 'api/PersonaPerfil/Listar';
    this.urlEliminarUsuarioConPerfil = 'api/PersonaPerfil/Eliminar';
    this.urlListarResponsables='api/Responsable/Listar';

   }

   listarUsuarioConPerfil():Observable<ListarUsuarioConPerfil[]>{
    return this.httpClient.get<any>(this.urlEnviro + this.urlListarUsuarioConPerfil).pipe(
      map((response) => {
        if(response && response.isSuccess && response.data) {
          return response.data.map(RolMapper.fromApiToDomain);
        }
        else{
          console.error('La respuesta del servicio no tiene la estructura esperada:', response);
          return [];
        }
      })
    )
   }

   listarPerfil():Observable<ListarRol[]>{
    return this.httpClient.get<any>(this.urlEnviro + this.urlListarResponsables).pipe(
      map((response) => {
        if(response && response.isSuccess && response.data) {
          return response.data.map(RolMapper.fromApiToDOmainResponsable);
        }
        else{
          console.error('La respuesta del servicio no tiene la estructura esperada:', response);
          return [];
        }
      })
    )
   }

   listarResponsable(): Observable<ListarResponsable[]>{
    return this.httpClient.get<any>(this.urlEnviro + this.urlListarPerfil).pipe(
      map((response) => {
        if(response && response.isSuccess && response.data) {
          return response.data.map(RolMapper.fromApiToDomainRol);
        }
        else{
          console.error('La respuesta del servicio no tiene la estructura esperada:', response);
          return [];
        }
      })
    )
   }

   eliminarUsuario(codigoPersonaPerfil:number): Observable<EliminarUsuarioConPerfil>{
    const requestBody:EliminarUsuarioConPerfil = {codigoPersonaPerfil}
    console.log(requestBody, '**');
    return this.httpClient.delete<EliminarUsuarioConPerfil>(this.urlEnviro + this.urlEliminarUsuarioConPerfil,  {body:requestBody})
   }
}
