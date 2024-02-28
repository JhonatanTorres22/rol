import { AgregarPerfilConUsuarioDTO, ListarResponsableDTO, ListarRolDTO, ListarUsuarioConPerfilDTO } from "src/app/infraestructura/dto/rol.dto";
import { AgregarPerfilConUsuario, ListarResponsable, ListarRol, ListarUsuarioConPerfil } from "../models/rol.model";

export class RolMapper{
    static fromApiToDomain(apiListarRol: ListarUsuarioConPerfilDTO):ListarUsuarioConPerfil{
        return {
            apellidoMaterno: apiListarRol.apellidoMaterno,
            apellidoPaterno: apiListarRol.apellidoPaterno,
            codigoPersonaPerfil: apiListarRol.codigoPersonaPerfil,
            nDocumento: apiListarRol.nDocumento,
            nombres: apiListarRol.nombres,
            perfil: apiListarRol.perfil,
        }
    }

    static fromDomainToApi(domainListarRol: ListarUsuarioConPerfil): ListarUsuarioConPerfilDTO{
        return{
            apellidoMaterno: domainListarRol.apellidoMaterno,
            apellidoPaterno: domainListarRol.apellidoPaterno,
            codigoPersonaPerfil: domainListarRol.codigoPersonaPerfil,
            nDocumento: domainListarRol.nDocumento,
            nombres: domainListarRol.nombres,
            perfil: domainListarRol.perfil,
        }
    }

    //listar rol

    static fromApiToDomainRol(apiListar:ListarRolDTO):ListarRol{
        return{
            descripcion: apiListar.descripcion,
            idPerfil: apiListar.idPerfil,
        }
    }

    static fromDomainToApiRol(apiListar:ListarRol):ListarRolDTO{
        return{
            descripcion: apiListar.descripcion,
            idPerfil: apiListar.idPerfil,
        }
    }

    //listar responsable
    static fromApiToDOmainResponsable(apiResponsable:ListarResponsableDTO):ListarResponsable{
        return{
            apellidoMaterno: apiResponsable.apellidoMaterno,
            apellidoPaterno: apiResponsable. apellidoPaterno,
            idPersona: apiResponsable.idPersona,
            nombres: apiResponsable.nombres,
        }
    }

    static fromDomainToApiResponsable(apiResponsable:ListarResponsable):ListarResponsableDTO{
        return{
            apellidoMaterno: apiResponsable.apellidoMaterno,
            apellidoPaterno: apiResponsable. apellidoPaterno,
            idPersona: apiResponsable.idPersona,
            nombres: apiResponsable.nombres,
        }
    }

    static fromApiToDomainAgregar(apiAgregarPerfil:AgregarPerfilConUsuarioDTO):AgregarPerfilConUsuario{
        return{
            codigoPerfil: apiAgregarPerfil.codigoPerfil,
            codigoPersona: apiAgregarPerfil.codigoPersona
        }
    }

    static fromDomainToApiAgregar(apiAgregarPerfil:AgregarPerfilConUsuario):AgregarPerfilConUsuarioDTO{
        return{
            codigoPerfil: apiAgregarPerfil.codigoPerfil,
            codigoPersona: apiAgregarPerfil.codigoPersona
        }
    }
}