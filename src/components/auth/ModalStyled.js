import styled from "styled-components";

export const DivStickyModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;

export const CrossButton = styled.button`
  font-family: "Oswald", sans-serif;
  color: var(--white);
  padding: 0px 8px;
  font-size: 10px;
  background-color: red;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;
