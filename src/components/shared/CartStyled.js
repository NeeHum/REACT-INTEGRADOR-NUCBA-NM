import styled, { css } from "styled-components";

export const DivCart = styled.div`
  padding: 30px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(181, 5, 174, 1) 100%
  );
  width: 400px;
  height: 100vh;
  position: fixed;
  right: -410px;
  border-radius: 15px 0 0 15px;
  box-shadow: -5px 5px 10px;
  transition: all 0.5s;
  z-index: 99;

  ${(props) =>
    props.opencart &&
    css`
      right: 0px;
    `}

  @media (max-width: 800px) {
    position: fixed;
    top: 0;
    width: 250px;
  }

  @media (min-width: 800px) and (max-width: 1280px) {
    position: fixed;
    top: 0;
    width: 400px;
  }
`;

export const DivGralCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0;
  margin: 0;
`;

export const TittleCart = styled.h3`
  font-family: "Oswald", sans-serif;
  color: white;
  font-size: 40px;
  text-align: center;

  @media (max-width: 800px) {
    font-size: 23px;
  }

  @media (min-width: 800px) and (max-width: 1280px) {
    
  }
`;

export const PayCart = styled.button`
  cursor: pointer;
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  color: white;
  padding: 10px 20px;
  border-radius: 15px;
  border: none;
  background: rgb(0, 185, 255);
  background: linear-gradient(
    90deg,
    rgba(0, 185, 255, 1) 0%,
    rgba(117, 5, 181, 1) 100%
  );
  border: 2px solid white;

  &:hover {
    background: green;
  }

  &:active {
    background: violet;
  }
`;

export const DivProducts = styled.div`
  align-items: center;
  text-align: center;
  height: 400px;
  width: 350px;
  overflow: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 800px) {
    width: 197px;
    height: 450px;
  }

  @media (min-width: 800px) and (max-width: 1280px) {
    width: 250px;
    height: 870px;
  }
`;

export const CardBuy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 350px;
  height: 150px;
  border-radius: 25px;
  margin: 5px 0px;

  @media (max-width: 800px) {
    width: 200px;
  }

  @media (min-width: 800px) and (max-width: 1280px) {
    width: 250px;
  }
`;

export const DivArticles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  color: var(--white);
  padding: 10px;
  margin: 0;
  width: 100%;
  height: 100%;
  gap: 15px;
  border-radius: 20px;

  @media (max-width: 800px) {
  }

  @media (min-width: 800px) and (max-width: 1280px) {
  }
`;

export const TittleGame = styled.p`
  font-size: 20px;
  width: 100%;
  padding: 1px;
  font-family: "Courier New", Courier, monospace;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 1) 50%,
    rgba(255, 255, 255, 0) 100%
  );

  @media (max-width: 800px) {
    font-size: 12px;
  }

  @media (min-width: 800px) and (max-width: 1280px) {
  }
`;

export const PriceGame = styled.span`
  width: 100%;
  padding: 1px;
  font-size: 20px;
  font-weight: 800;
  font-family: "Courier New", Courier, monospace;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 1) 50%,
    rgba(255, 255, 255, 0) 100%
  );

  @media (max-width: 800px) {
    font-size: 15px;
  }

  @media (min-width: 800px) and (max-width: 1280px) {
  }
`;

export const SpanEmptyCart = styled.span`
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  color: var(--white);
  align-items: center;

   @media (max-width: 800px) {
    font-size: 15px;
    
  }

  @media (min-width: 800px) and (max-width: 1280px) {
    
  }
`;

export const PriceTotal = styled.p`
  font-family: "Oswald", sans-serif;
  font-size: 25px;

  color: var(--blue);

   @media (max-width: 800px) {
    font-size: 15px;
    
  }

  @media (min-width: 800px) and (max-width: 1280px) {
    
  }
`;

export const NumberProducts = styled.span`
  font-family: "Oswald", sans-serif;
  font-size: 15px;
  font-weight: 100;
  color: var(--blue);
  background-color: var(--white);
  border-radius: 3px;
`;

export const DivTitleNumber = styled.div`
  width: 100%;
`;

export const ThankYou = styled.div`
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  font-family: "Oswald", sans-serif;
  color: var(--white);
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 255, 93, 1) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 20px;
`;
