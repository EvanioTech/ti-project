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
            <Link className='textButton' to="/">
            
            <Button variant="contained" color='primary'  fullWidth  >
                Entrar
            </Button>
            
            </Link>
           
        </Box>
    );
};

export default SignIp;