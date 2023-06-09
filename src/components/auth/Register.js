import React, { useState } from "react";
import {
  ButtonCancelRegister,
  ButtonRegisterOk,
  DivRegister,
  FormRegister,
  InputRegister,
} from "./RegisterStyled";

const Register = ({ onClose, onRegister }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear un objeto con los datos del usuario
    const user = {
      firstName,
      lastName,
      email,
      password,
    };

    onRegister(user.firstName);
  };

  const handleCancel = () => {
    onClose(); // Cerrar la ventana flotante y volver al componente Login
  };

  return (
    <DivRegister>
      <FormRegister onSubmit={handleSubmit}>
        <label htmlFor="firstName">FIRST NAME</label>
        <InputRegister
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <label htmlFor="lastName">LAST NAME</label>
        <InputRegister
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <label htmlFor="email">EMAIL</label>
        <InputRegister
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">PASSWORD</label>
        <InputRegister
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <ButtonRegisterOk type="submit">REGISTER</ButtonRegisterOk>
        <ButtonCancelRegister type="button" onClick={handleCancel}>
          CANCEL
        </ButtonCancelRegister>
      </FormRegister>
    </DivRegister>
  );
};

export default Register;
