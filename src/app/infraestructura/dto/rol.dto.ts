export interface ListarUsuarioConPerfilDTO {
     codigoPersonaPerfil:number,
     nombres:string,
     apellidoPaterno:string,
     apellidoMaterno:string,
     nDocumento:string,
     perfil:string
}

export interface ListarRolDTO {
     idPerfil:number,
     descripcion:string
}

export interface ListarResponsableDTO{
     idPersona: number,
    nombres: string,
    apellidoPaterno: string,
    apellidoMaterno: string
}