import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/api/register", {
        email,
        password,
      });
      alert("Registracija sėkminga!");
    } catch (error) {
      console.error(error);
      alert("Registracija nepavyko!");
    }
  };

  return (
    <div>
      <h2>Registracija</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="El. paštas"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Slaptažodis"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registruotis</button>
      </form>
    </div>
  );
};

export default Register;
