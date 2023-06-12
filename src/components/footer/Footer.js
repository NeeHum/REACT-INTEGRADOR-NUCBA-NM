import React from "react";
import {
  FooterContainer,
  FooterContent,
  SocialIconsContainer,
  PhoneNumber,
  ImgLogoFooter,
} from "./FooterStyled";
import tw from "../../assets/img/Redes/tw.png";
import wpp from "../../assets/img/Redes/wpp.png";
import fb from "../../assets/img/Redes/facebook.png";
import ig from "../../assets/img/Redes/instagram.png";
import logo from "../../assets/img/logo.png";

const Footer = () => {
  const randomNumber = Math.floor(Math.random() * 100000000);

  return (
    <FooterContainer>
      <ImgLogoFooter src={logo}></ImgLogoFooter>
      <span>Buy Games</span>
      <FooterContent>
        <p>Follow us on our networks:</p>
        <SocialIconsContainer>
          <a href="https://www.instagram.com">
            <img src={ig} alt="Instagram" />
          </a>
          <a href="https://www.twitter.com">
            <img src={tw} alt="Twitter" />
          </a>
          <a href="https://www.facebook.com">
            <img src={fb} alt="Facebook" />
          </a>
        </SocialIconsContainer>
        <PhoneNumber>Contact us by WhatsApp: +54 11{randomNumber}</PhoneNumber>
        <a href={`https://wa.me/${randomNumber}`}>
          <img src={wpp} alt="WhatsApp" />
        </a>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
