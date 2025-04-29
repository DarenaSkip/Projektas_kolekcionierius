import React, { useState } from 'react';
import { TextField, Button, Snackbar } from '@mui/material';
import CloseSnackbarAction from '../lib/utils/CloseSnackbarAction'; // Svarbu, kad butu toks failas!

const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

const RegisterForm = ({ handleSwitchForm }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    repeatPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password, repeatPassword } = formData;

    // Validacija
    if (!usernameRegex.test(username)) {
      setSnackbarMessage('Vartotojo vardas turi būti 3-20 simbolių, tik raidės, skaičiai, "_" arba "-"');
      setSnackbarOpen(true);
      return;
    }

    if (!emailRegex.test(email)) {
      setSnackbarMessage('Neteisingas el. pašto formatas');
      setSnackbarOpen(true);
      return;
    }

    if (!passwordRegex.test(password)) {
      setSnackbarMessage('Slaptažodyje turi būti 8 simboliai, viena mažoji, viena didžioji raidė ir skaičius');
      setSnackbarOpen(true);
      return;
    }

    if (password !== repeatPassword) {
      setSnackbarMessage('Slaptažodžiai nesutampa');
      setSnackbarOpen(true);
      return;
    }

    // Siuntimas į serverį
    try {
      const response = await fetch('http://localhost:3001/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
      });

      if (!response.ok) {
        throw new Error('Registracija nepavyko');
      }

      setSnackbarMessage('Registracija sėkminga!');
      setSnackbarOpen(true);
      
      setTimeout(() => {
        handleSwitchForm(); // Pereina į loginą
      }, 1500);

    } catch (error) {
      setSnackbarMessage('Klaida registruojantis. Bandykite dar kartą.');
      setSnackbarOpen(true);
      console.error('Klaida:', error);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: 'auto', padding: '2rem' }}>
      <TextField
        label="Vartotojo vardas"
        name="username"
        value={formData.username}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="El. paštas"
        name="email"
        value={formData.email}
        onChange={handleChange}
        type="email"
        fullWidth
      />
      <TextField
        label="Slaptažodis"
        name="password"
        value={formData.password}
        onChange={handleChange}
        type={showPassword ? 'text' : 'password'}
        fullWidth
      />
      <TextField
        label="Pakartoti slaptažodį"
        name="repeatPassword"
        value={formData.repeatPassword}
        onChange={handleChange}
        type={showPassword ? 'text' : 'password'}
        fullWidth
      />
      <Button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? 'Slėpti slaptažodį' : 'Rodyti slaptažodį'}
      </Button>
      <Button type="submit" variant="contained" color="primary">
        Registruotis
      </Button>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        action={<CloseSnackbarAction onClose={handleCloseSnackbar} />}
      />
    </form>
  );
};

export default RegisterForm;
