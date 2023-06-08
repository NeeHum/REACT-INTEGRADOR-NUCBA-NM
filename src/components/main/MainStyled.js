import styled from "styled-components";

export const MainMain = styled.main`
  padding-left: 5rem;

  @media (max-width: 800px) {
    position: relative;
    top: 0;
    padding: 0;
    margin: 0;
    z-index: 1;
    width: 100%;
    
  }

  @media (min-width: 800px) and (max-width: 1280px) {
    position: relative;
    top: 0;
    padding: 0;
    margin: 0;
    z-index: 1;
    width: 100%;
    
  }
`;

export const DivMain = styled.div`
  padding: 0;
  margin: 0;
`;

export const WallpaperHome = styled.img`
  width: 100%;
`;

export const TittleSales = styled.h2`
  text-align: center;
  margin: 0px 0px 50px 0px;
  font-size: 100px;
  font-family: "Oswald", sans-serif;
  background: linear-gradient(var(--pink), var(--blue));
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-stroke: 2px var(--white);

  @media (max-width: 800px) {
    font-size: 30px;
    padding: 0 5px;
    margin: 0 0 20px 0;
    -webkit-text-stroke: 0.5px var(--white);
  }

  @media (min-width: 800px) and (max-width: 1280px) {
    font-size: 60px;
    margin: 0 0 20px 0;
    padding: 0 40px;
  }
`;

export const TittleCategories = styled.h3`
  margin: 50px;
  text-align: center;
  font-size: 80px;
  color: var(--blue);
  font-family: "Oswald", sans-serif;

  @media (max-width: 800px) {
    font-size: 25px;
  }

  @media (min-width: 800px) and (max-width: 1280px) {
    font-size: 40px;
  }

  @media (min-width: 1280px) {
  }
`;

export const UlCategories = styled.ul`
  font-family: "Oswald", sans-serif;
  font-size: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 80px;
  padding: 20px;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    gap: 10px;
  }

  @media (min-width: 800px) and (max-width: 1280px) {
    font-size: 20px;
  }

  @media (min-width: 1280px) {
  }
`;

export const LiCategories = styled.li``;

export const ButtonCategories = styled.button`
  font-family: "Oswald", sans-serif;
  font-size: 30px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--pink);
  &:hover {
    color: var(--white);
  }
  &:active {
    color: var(--blue);
  }

  @media (max-width: 800px) {
    background: rgb(255, 255, 255);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    width: 120px;
    padding: 10px;
    border-radius: 10px;
    font-size: 18px;
    border: none;
  }

  @media (min-width: 800px) and (max-width: 1280px) {
    font-size: 30px;
  }
`;
