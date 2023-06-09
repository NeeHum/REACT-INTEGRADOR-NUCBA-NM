import styled from "styled-components";

export const DivRegister = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--darkpurple);
  padding: 40px;
  margin-top: -25px;
  margin-left: -10px;
  border-radius: 15px;
`;

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 20px;
  font-family: "Oswald", sans-serif;
  font-size: 25px;
  color: var(--white);
`;

export const InputRegister = styled.input`
  font-family: "Oswald", sans-serif;
  width: 200px;
  border-radius: 15px;
  padding: 5px;
  border: none;
  outline: none;
`;


export const ButtonRegisterOk = styled.button`
  text-align: center;
  border: none;
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  background: rgb(34, 193, 195);
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 45, 206, 1) 100%
  );
  color: var(--white);
  :hover {
    background: rgb(253, 45, 206);
    background: linear-gradient(
      0deg,
      rgba(253, 45, 206, 1) 0%,
      rgba(34, 193, 195, 1) 100%
    );
  }

  :active {
    background-color: var(--purple);
    color: var(--white);
    border: 1px solid var(--white);
  }
`;

export const ButtonCancelRegister = styled.button`
  margin-top: 25px;
  text-align: center;
  border: none;
  font-family: "Oswald", sans-serif;
  color: var(--pink);
  background-color: var(--white);
  border: 1px solid var(--pink);
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    background-color: var(--pink);
    color: var(--white);
    border: 1px solid var(--white);
  }

  :active {
    background-color: var(--purple);
    color: var(--white);
    border: 1px solid var(--white);
  }
`;