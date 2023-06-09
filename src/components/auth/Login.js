import React, { useState } from "react";
import Register from "./Register";
import {
  ButtonLogin,
  ButtonRegister,
  DivLogin,
  DivWelcome,
  FormLogin,
  InputLogin,
} from "./LoginStyled";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showRegister, setShowRegister] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
  const [registeredFirstName, setRegisteredFirstName] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica de inicio de sesión aquí
    const user = {
      firstName: registeredFirstName, // Usar el firstName registrado en Register.js
    };
    setLoggedInUser(user);
    setShowWelcomeMessage(true);
    setTimeout(() => {
      setShowWelcomeMessage(false);
    }, 5000);
  };

  const handleRegister = (firstName) => {
    //datos del usuario para su uso posterior
    console.log(firstName);
    setRegisteredFirstName(firstName);
    setShowRegister(false); // Cerrar la ventana flotante después de registrar
  };

  const openRegister = () => {
    setShowRegister(true);
  };

  const closeRegister = () => {
    setShowRegister(false);
  };

  return (
    <div>
      {!showRegister && (
        <DivLogin>
          <FormLogin onSubmit={handleLogin}>
            <label htmlFor="email">EMAIL</label>
            <InputLogin
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">PASSWORD</label>
            <InputLogin
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <ButtonLogin type="submit">LOGIN</ButtonLogin>
            <ButtonRegister type="button" onClick={openRegister}>
              SIGN IN
            </ButtonRegister>
          </FormLogin>
        </DivLogin>
      )}

      {showRegister && (
        <Register onRegister={handleRegister} onClose={closeRegister} />
      )}

      {showWelcomeMessage && (
        <DivWelcome className="floating-message">
          Welcome, {loggedInUser && loggedInUser.firstName}! Close the login
          window to make your purchases.
        </DivWelcome>
      )}
    </div>
  );
};

export default Login;
