import React from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const LoginForm = ({ handleSwitchForm }) => {
  return (
    <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h5" align="center">Prisijungimas</Typography>
      <TextField label="Vartotojo vardas" variant="outlined" required fullWidth />
      <TextField label="Slaptažodis" variant="outlined" type="password" required fullWidth />
      <Button type="submit" variant="contained" color="success" fullWidth>Prisijungti</Button>
      <Typography align="center" sx={{ mt: 1 }}>
        <a href="#">Pamiršai slaptažodį?</a>
      </Typography>
      <Typography align="center" sx={{ mt: 2 }}>
        Neturi paskyros?{' '}
        <span style={{ cursor: 'pointer', color: 'blue' }} onClick={handleSwitchForm}>
          Registruokis
        </span>
      </Typography>
    </Box>
  );
};

export default LoginForm;
