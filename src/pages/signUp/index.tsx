import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const SignUp: React.FC = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            
            
            
           
        >
            <Typography variant="h4" gutterBottom>
                Sign Up
            </Typography>
            <TextField label="Username" variant="outlined" margin="normal" fullWidth />
            <TextField label="Email" variant="outlined" margin="normal" fullWidth />
            <TextField label="Password" type="password" variant="outlined" margin="normal" fullWidth />
            <Button variant="contained" color="primary" fullWidth onClick={() => alert('Teste')}>
                Sign Up
            </Button>
        </Box>
    );
};

export default SignUp;