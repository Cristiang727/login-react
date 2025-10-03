import { Box, Typography } from "@mui/material";
import FormLogin from "../../components/FormLogin";


export default function LoginPage() {
    return (
        <>            
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                bgcolor: "background.default",
            }}>
            <Typography variant='h4' component="h1" gutterBottom>
                Inicio de sesion
            </Typography>

            <FormLogin/>
        </Box>

        </>
    )
}