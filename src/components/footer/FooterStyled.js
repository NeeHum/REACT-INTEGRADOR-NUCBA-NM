import styled from "styled-components";

export const FooterContainer = styled.footer`
  font-family: "Oswald", sans-serif;
  color: var(--white);
  background-color: var(--purple);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  img {
    width: 25px;
    height: 25px;
  }
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;

  a {
    margin: 0 5px;
  }
`;

export const PhoneNumber = styled.p`
  margin-top: 10px;
`;

export const ImgLogoFooter = styled.img`

width: 100px;
`;
