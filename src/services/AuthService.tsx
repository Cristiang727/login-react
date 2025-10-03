import Conexion from "../api/Conexion";
import type { LoginRequest, LoginResponse } from "../types/AuthType";

export const login = async (payload:LoginRequest):Promise<LoginResponse> =>{
    const {data} = await Conexion.post<LoginResponse>("/login",payload);
    return data;
}

export const logout = async()=>{
    const {data} = await Conexion.post("/logout")
    return data;
}