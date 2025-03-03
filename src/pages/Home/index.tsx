import React from 'react';
import { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import './home.css';




const Home: React.FC = () => {

    const [username, setUsername] = useState('Matias');
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            width="95vw"
            bgcolor="background.default"
            
        >
            <h1>Ola {username}</h1>
            <Box
            flexDirection='row'
            >
                <h1>Informe sua Saída:</h1>
            <TextField label="Horas"
             variant="filled"
              type="number"
               margin="normal" 
               onChange={(e) => setHours(Number(e.target.value))} />
            <TextField label="Minutos"
             type="number"
              variant="filled"
               margin="normal"
               onChange={(e) => setMinutes(Number(e.target.value))}  />
            </Box>
            <h1>Horas Extras do dia: </h1>
            
            <Link className='textButton' to="/bank">
                <Button variant="contained" color='primary' fullWidth>
                    Salvar
                </Button>
            </Link>
        </Box>
    );
};

export default Home;