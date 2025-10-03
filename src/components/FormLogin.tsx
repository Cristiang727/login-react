import * as React from "react"
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


export default function FormLogin() {

    const { loginUser } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("")
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState<string | null>(null)


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setError(null),
            setLoading(true)

        try {
            const response = await loginUser(email, password);
            const userRol = response.user.rol.rol.toLowerCase();

            switch (userRol) {
                case "admin":
                    navigate("/admin/dashboard")
                    break;
                case "usuario":
                    navigate("/usuario/dashboard")
                    break
            }
        } catch (error) {
            setError("Error al iniciar sesion")
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    return (
        <>
            <div>
                <form id="form-login" method="post" onSubmit={handleSubmit}>
                    <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="email" />
                    <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} aria-label="password" />

                    <button type="submit" id="btn-login" name="btn-login">Iniciar sesion</button>
                </form>
            </div>
        </>
    )
}