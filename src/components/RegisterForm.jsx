import React from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const RegisterForm = ({ handleSwitchForm }) => {
  return (
    <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h5" align="center">Registracija</Typography>
      <TextField label="Vartotojo vardas" variant="outlined" required fullWidth />
      <TextField label="El. paštas" variant="outlined" required fullWidth />
      <TextField label="Slaptažodis" variant="outlined" type="password" required fullWidth />
      <TextField label="Pakartoti slaptažodį" variant="outlined" type="password" required fullWidth />
      <Button variant="contained" color="success" fullWidth>Registruotis</Button>
      <Typography align="center" sx={{ mt: 2 }}>
        Jau turi paskyrą?{' '}
        <span style={{ cursor: 'pointer', color: 'blue' }} onClick={handleSwitchForm}>
          Prisijunk
        </span>
      </Typography>
    </Box>
  );
};

export default RegisterForm;
