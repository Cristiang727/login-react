import Conexion from "../api/Conexion";
import type { User } from "../types/UserType";

export const getMe = async ():Promise<User> =>{
    const {data} = await Conexion.get("/me");
    return data.user;
}