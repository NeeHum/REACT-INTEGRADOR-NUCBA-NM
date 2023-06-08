import styled, { css } from "styled-components";

export const DivNav = styled.div`
  position: fixed;
  z-index: 99;
`;

export const NavSidebar = styled.nav`
  position: fixed;
  background-color: var(--darkpurple);
  width: 6rem;
  height: 100%;
  border-radius: 0px 20px 20px 0;
  padding: 20px 0 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 5px 5px 20px;

  @media (max-width: 800px) {
    position: fixed;
    height: 100vh;
    left: -6rem;
    transition: all 0.5s;
    box-shadow: none;

    /* ---Toggle system--- */
    ${(props) =>
      props.open &&
      css`
        left: 0rem;
      `}
  }

  @media (min-width: 800px) and (max-width: 1280px) {
    position: fixed;
    height: 100vh;
    left: -7rem;
    transition: all 0.5s;
    box-shadow: 5px 5px 20px;

    /* ---Toggle system--- */
    ${(props) =>
      props.open &&
      css`
        left: 0rem;
      `}
  }

`;

export const LogoNav = styled.img`
  padding: 0;
  margin-bottom: 20px;
  width: 90px;
`;

export const UlSidebar = styled.ul`
  color: var(--pink);
  font-size: 30px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;
`;
export const LiSidebar = styled.li`
  border-radius: 10px 0px 0px 10px;
  margin: 10px 0px 10px 10px;
  padding: 15px 0px 10px 1rem;
  width: 5.35rem;
  &:hover {
    background-color: var(--purple);
    transition: all 0.5s;
  }
`;
export const ASidebar = styled.a`
  padding: 10px 10px 2px 10px;
  border-radius: 10px;
  color: var(--pink);
  &:hover {
    background-color: var(--pink);
    color: var(--white);
    transition: all 0.5s;
  }
`;

export const ButtonSidebar = styled.button`
  padding: 10px 10px 2px 10px;
  border-radius: 100%;
  color: var(--pink);
  font-size: 25px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: var(--pink);
    color: var(--white);
    transition: all 0.5s;
  }
`;

export const SpanCopy = styled.span`
  color: var(--blue);
  text-align: center;
  font-family: "Courier New", Courier, monospace;
  font-size: large;
  padding: 0px 15px;
`;
