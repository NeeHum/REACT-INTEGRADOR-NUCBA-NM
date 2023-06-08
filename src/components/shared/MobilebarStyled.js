import styled from "styled-components";

export const ConteinerDivMobile = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
  list-style: none;
  

  @media (max-width: 800px) {
  }

  @media (min-width: 800px) and (max-width: 1280px) {
  }

  @media (min-width: 1280px) {
    display: none;
  }
`;

export const NavMobile = styled.nav`
  padding: 10px 0 10px 10px;
  margin-bottom: 15px;
  background-color: var(--darkpurple);
  position: fixed;
  bottom: 0;
  right: 0;
  border-radius: 15px 0 0 15px;
  z-index: 98;
`;

export const ButtonMobile = styled.button`
  border-radius: 15px 0 0 15px;
  border: none;
  padding: 10px 10px 5px 10px;
  background-color: var(--pink);
  color: var(--white);
  font-size: 40px;
  cursor: pointer;

  @media (max-width: 800px) {
  font-size: 20px;
  border-radius: 10px 0 0 10px;
}
`;


