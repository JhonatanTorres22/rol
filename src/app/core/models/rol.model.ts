export class ListarUsuarioConPerfil{
    constructor(
    public codigoPersonaPerfil:number,
    public nombres:string,
    public apellidoPaterno:string,
    public apellidoMaterno:string,
    public nDocumento:string,
    public perfil:string
    ){}
}

export class ListarRol{
    constructor(
        public idPerfil: number,
        public descripcion:string
    ){}
}

export class ListarResponsable{
    constructor(
        public idPersona: number,
        public nombres: string,
        public apellidoPaterno: string,
        public apellidoMaterno: string
    ){}
}

export class crearPerfilConUsuario{
    constructor(
        public codigoPersona:number,
        public codigoPerfil:number,
    ){}
}

export class EliminarUsuarioConPerfil{
    constructor(
        public codigoPersonaPerfil:number
    ){}
}