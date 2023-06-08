import styled from "styled-components";

export const DivCard = styled.div`
  margin-left: 20px;
  width: 250px;
  height: 380px;
  border-radius: 30px 30px 20px 20px;
  background: rgb(34, 193, 195);
  background: linear-gradient(
    90deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 0, 255, 1) 100%
  );
`;

export const ImgGame = styled.img`
  width: 100%;
  border-radius: 20px 20px 0 0;
`;

export const DataCard = styled.div`
  margin-top: 5px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: 600;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  color: var(--white);
`;

export const TittleGameCard = styled.p``;

export const PriceCard = styled.span`
  font-size: 20px;
  color: var(--white);
`;

export const ButtonBuyCard = styled.button`
  font-weight: 600;
  margin-top: 10px;
  border: none;
  padding: 12px;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    background: rgb(131, 58, 180);
    background: linear-gradient(
      90deg,
      rgba(131, 58, 180, 1) 0%,
      rgba(253, 29, 210, 1) 50%,
      rgba(252, 176, 69, 1) 100%
    );
    color: var(--white);
  }
  &:active {
    background: rgb(14, 77, 9);
    background: linear-gradient(
      90deg,
      rgba(14, 77, 9, 1) 0%,
      rgba(29, 253, 74, 1) 50%,
      rgba(14, 77, 9, 1) 100%
    );
  }
`;
