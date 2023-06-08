import React from "react";
import {
  DivCard,
  ImgGame,
  TittleGameCard,
  DataCard,
  PriceCard,
  ButtonBuyCard
} from "./CardStyled";

const Card = ({ title, imgGame, priceGame, addToCart, cartItems, setCartItems }) => {
  const handleAddToCart = () => {
    const product = {
      title,
      imgGame,
      priceGame, 
      price: parseFloat(priceGame), 
    };
    addToCart(product);
  };

  return (
    <>
      <DivCard>
        <div>
          <ImgGame src={imgGame} alt={title} />
        </div>
        <DataCard>
          <TittleGameCard>{title}</TittleGameCard>
          <PriceCard>${priceGame}</PriceCard>
          <ButtonBuyCard onClick={handleAddToCart}>ADD TO CART</ButtonBuyCard>
        </DataCard>
      </DivCard>
      
    </>
  );
};

export default Card;