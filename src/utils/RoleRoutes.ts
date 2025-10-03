export const ROL_ROUTES: Record<string, string[]> = {
    admin: [
        "admin/dashboard",
        "/admin/usuarios",
        "/admin/novedades",
        "/admin/profile",
    ],
    usuario: ["usuario/dashboard"],
};

const URL_DEFAULT = "/login";

//Ruta principal del rol
export const getRouteByRol = (rol: string): string => {
    const normalizedRol = rol.toLowerCase().trim();
    return ROL_ROUTES[normalizedRol]?.[0] || URL_DEFAULT;
};

//Verificar si el usuario tiene accesso
export const hasRolPermissions = (
    userRol: string,
    allowedRoles: string[],
): boolean => {
    const normalizedRol = userRol.toLowerCase().trim();
    return allowedRoles.some((rol) => rol.toLowerCase() === normalizedRol);
};
