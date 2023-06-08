import React, { useState } from "react";
import Card from "./Card";
import { DivArticlesCards, ListGames } from "./CardsStyled";
import cards from "./DataProducts";
import {
  ButtonCategories,
  LiCategories,
  UlCategories,
} from "../main/MainStyled";

const Cards = ({ cartItems, setCartItems }) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

  const handleCategoriaSeleccionada = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.title === product.title
    );
    if (existingItemIndex !== -1) {
      // Si el producto ya existe en el carrito, actualiza la cantidad en lugar de agregar una nueva tarjeta
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      // Si el producto no existe en el carrito, agrega una nueva tarjeta
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...product, quantity: 1 },
      ]);
    }
  };

  const cardsFiltradas = cards.filter(
    (card) =>
      card.categoria.id === categoriaSeleccionada ||
      categoriaSeleccionada === ""
  );

  return (
    <>
      <ListGames>
        <div>
          <UlCategories>
            <LiCategories>
              <ButtonCategories onClick={() => handleCategoriaSeleccionada("")}>
                ALL
              </ButtonCategories>
            </LiCategories>
            <LiCategories>
              <ButtonCategories
                onClick={() => handleCategoriaSeleccionada("FPS")}
              >
                FPS
              </ButtonCategories>
            </LiCategories>
            <LiCategories>
              <ButtonCategories
                onClick={() => handleCategoriaSeleccionada("OpenWorld")}
              >
                OPEN WORLD
              </ButtonCategories>
            </LiCategories>
            <LiCategories>
              <ButtonCategories
                onClick={() => handleCategoriaSeleccionada("Adventure")}
              >
                ADVENTURE
              </ButtonCategories>
            </LiCategories>
          </UlCategories>
        </div>

        <DivArticlesCards>
          {cardsFiltradas.map((card) => (
            <Card
              key={card.id}
              title={card.titulo}
              imgGame={card.imagen}
              priceGame={card.precio}
              price={parseFloat(card.precio)}
              addToCart={addToCart}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          ))}
        </DivArticlesCards>
      </ListGames>
    </>
  );
};

export default Cards;