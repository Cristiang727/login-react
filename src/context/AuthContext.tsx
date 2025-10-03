import * as React from 'react';
import type { AuthContextProps, LoginResponse } from '../types/AuthType';
import type { User } from '../types/UserType';
import { getMe } from '../services/UserService';

const AuthContext = React.createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = React.useState<User | null>(null);
    const [token, setToken] = React.useState<string | null>(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            setToken(storedToken)

            getMe()
                .then(setUser)
                .catch(() => {
                    localStorage.removeItem("token");
                    setToken(null)
                })
                .finally(() => setLoading(false))
        } else {
            setLoading(false)
        }

    },[]);

    const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
        try {
            const response = await import("../services/AuthService").then(m => m.login({ email, password }))
            setUser(response.user);
            setToken(response.token);

            localStorage.setItem("token", response.token)

            return response;
        } catch (error) {
            console.log("Error en el login");
            throw error;
        }
    }

    const logout = async () => {
        setUser(null)
        setToken(null)

        localStorage.removeItem("token")
    }

    // if (loading) {
    //     return <div>cargando...</div>
    // }

    return (
        <AuthContext.Provider value={{ user, token, loginUser, logout,loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = React.useContext(AuthContext);

    if (!context) throw new Error("useAuth debe usarse dentro de AuthProvider")

    return context;
}