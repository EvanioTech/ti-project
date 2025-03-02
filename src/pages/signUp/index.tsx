import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const SignUp: React.FC = () => {
    const [form, setForm] = useState({ username: '', email: '', password: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        console.log('Cadastro:', form);
    };

    return (
        <>
        <Box
            component="form"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            <Typography variant="h4" gutterBottom>
                Cadastre-se
            </Typography>
            <TextField name="username" label="Username" variant="outlined" margin="normal" fullWidth onChange={handleChange} />
            <TextField name="email" label="Email" variant="outlined" margin="normal" fullWidth onChange={handleChange} />
            <TextField name="password" label="Password" type="password" variant="outlined" margin="normal" fullWidth onChange={handleChange} />
            <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
                Cadastrar
            </Button>
            <Typography variant="body2" gutterBottom>
                Já tem uma conta? <Link to="/signin">Entrar</Link>
            </Typography>
        </Box>
        
        </>
    );
};

export default SignUp;
