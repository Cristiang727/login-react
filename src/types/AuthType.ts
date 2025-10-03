import type { ReactNode } from "react"
import type { User } from "./UserType"

export interface LoginRequest{
    email:string,
    password:string
}

export interface LoginResponse{
    success:boolean,
    message:string,
    token:string,
    user:User
}

export interface AuthContextProps{
    user:User|null,
    token:string|null,
    loginUser:(email:string,password:string)=>Promise<LoginResponse>,
    logout:()=>void,
    loading:boolean
}

export type RoleName = "admin"|"usuario"

export interface RoleProtectedRoutesProps{
    children:ReactNode,
    allowedRoles: RoleName[]
}