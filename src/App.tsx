import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import LoginPage from "./pages/Auth/Login"
import { RoleProtectedRoute } from './components/RoleProtectedRoutes';
import DashBoardUser from "./pages/Users/DashBoard"
import DashBoardAdmin from "./pages/Admin/Dasboard"
import UsuariosAdminpage from "./pages/Admin/Usuarios";
import NovedadesAdminPage from "./pages/Admin/Novedades";
import ProfileAdminPage from "./pages/Admin/Profile";
import { logout } from './services/AuthService';


function App() {


  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" Component={logout}></Route>

          {/* Rutas admin */}
          <Route 
            path="admin/dashboard"
            element={
              <RoleProtectedRoute allowedRoles={["admin"]}>
                <DashBoardAdmin />
              </RoleProtectedRoute>
          } />


          <Route
            path="/admin/usuarios"
            element={
              <RoleProtectedRoute allowedRoles={["admin"]}>
                <UsuariosAdminpage />
              </RoleProtectedRoute>
            }
          />

          <Route
            path="/admin/novedades"
            element={
              <RoleProtectedRoute allowedRoles={["admin"]}>
                <NovedadesAdminPage />
              </RoleProtectedRoute>
            }
          />

          <Route
            path="/admin/profile"
            element={
              <RoleProtectedRoute allowedRoles={["admin"]}>
                <ProfileAdminPage />
              </RoleProtectedRoute>
            }
          />




          <Route path="usuario/dashboard" element={
            <RoleProtectedRoute allowedRoles={["usuario"]}>
              <DashBoardUser />
            </RoleProtectedRoute>
          } />

          <Route path="/" element={<LoginPage />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
