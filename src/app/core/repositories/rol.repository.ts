import { Observable } from "rxjs";
import { EliminarUsuarioConPerfil, ListarRol, ListarUsuarioConPerfil } from "../models/rol.model";

export abstract class RolRepository {
    abstract listarUsuarioConPerfil():Observable<ListarUsuarioConPerfil>;
    abstract listarRol():Observable<ListarRol>;
    abstract eliminarUsuario(codigoPersonPerfil:number):Observable<EliminarUsuarioConPerfil>
}