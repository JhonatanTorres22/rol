import { Observable } from "rxjs";
import { AgregarPerfilConUsuario, EliminarUsuarioConPerfil, ListarRol, ListarUsuarioConPerfil } from "../models/rol.model";

export abstract class RolRepository {
    abstract listarUsuarioConPerfil():Observable<ListarUsuarioConPerfil>;
    abstract listarRol():Observable<ListarRol>;
    abstract eliminarUsuario(codigoPersonPerfil:number):Observable<EliminarUsuarioConPerfil>;
    abstract agregarPerfilConUsuario(agregar:AgregarPerfilConUsuario): Observable<AgregarPerfilConUsuario>;
}