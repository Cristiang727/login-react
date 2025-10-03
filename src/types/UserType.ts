export interface Rol{
    id:number,
    rol:string
}

export interface User{
    id:number,
    name:string,
    email:string,
    rol_id:number|null,
    rol:Rol
}