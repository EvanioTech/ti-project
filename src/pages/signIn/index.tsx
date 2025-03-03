import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import './styles.css';

const SignIp: React.FC = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            
            
            
           
        >
            
            <TextField label="Username" variant="outlined" margin="normal" fullWidth />
            
            <TextField label="Password" type="password" variant="outlined" margin="normal" fullWidth />
            <Link className='buttonEntrar' to="/Home">
            <Button variant="contained"   fullWidth color="secondary" >
                Entrar
            </Button>
            </Link>
           
        </Box>
    );
};

export default SignIp;