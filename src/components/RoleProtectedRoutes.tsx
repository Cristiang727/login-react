import * as React from "react";
import type { RoleProtectedRoutesProps } from "../types/AuthType";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { getRouteByRol, hasRolPermissions } from "../utils/RoleRoutes";
import { Box, Button, Typography } from "@mui/material";


export const RoleProtectedRoute: React.FC<RoleProtectedRoutesProps> = ({
  children,
  allowedRoles
}) => {
  const { token, user, loading } = useAuth();

  if (loading) {
    return <div>Cargando sesión...</div>;
  }

  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  const userRol = user?.rol?.rol?.toLowerCase().trim() ?? "";
  const hasPermissions = hasRolPermissions(userRol, allowedRoles);

  if (!hasPermissions) {
    const defaultRoute = getRouteByRol(userRol);
    return <Navigate to={defaultRoute} replace />;
  }

  return <>{children}</>;
};

