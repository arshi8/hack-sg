import React from "react";
import { Box } from "@mui/material";
const LoginPageImage = ()=>{
    return(
    <Box
    sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    }}
>
    <img
        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
        alt="react logo"
        style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'cover',
        }}
    />
</Box>)};
export default LoginPageImage;