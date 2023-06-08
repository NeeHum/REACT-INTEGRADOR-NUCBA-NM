import React, { useState } from "react";

import {
  DivNav,
  NavSidebar,
  LogoNav,
  UlSidebar,
  LiSidebar,
  ASidebar,
  SpanCopy,
  ButtonSidebar,
} from "./SidebarStyled.js";
import {
  CardBuy,
  DivArticles,
  DivCart,
  DivGralCart,
  DivProducts,
  DivTitleNumber,
  NumberProducts,
  PayCart,
  PriceGame,
  PriceTotal,
  SpanEmptyCart,
  ThankYou,
  TittleCart,
  TittleGame,
} from "./CartStyled";
import {
  RiHome4Line,
  RiPercentLine,
  RiGamepadLine,
  RiShoppingCart2Line,
  RiMenuUnfoldLine,
  RiAccountCircleLine,
  RiDeleteBin6Line,
  RiCloseLine,
} from "react-icons/ri";
import logo from "../../assets/img/logo.png";
import {
  ConteinerDivMobile,
  NavMobile,
  ButtonMobile,
} from "./MobilebarStyled.js";

const Sidebar = ({ cartItems, setCartItems }) => {
  const [open, setOpen] = useState(false);
  const [opencart, setOpencart] = useState(false);
  const [showThanks, setShowThanks] = useState(false);

  const handleRemoveFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };

  const handlePurchase = () => {
    setCartItems([]);
    setShowThanks(true);
    setTimeout(() => {
      setShowThanks(false);
    }, 3000);
  };

  return (
    <>
      {/* ---Sidebar--- */}

      <DivNav>
        <NavSidebar open={open}>
          <UlSidebar>
            <LogoNav src={logo}></LogoNav>
            <LiSidebar>
              <ASidebar href="#">
                <RiHome4Line />
              </ASidebar>
            </LiSidebar>
            <LiSidebar>
              <ASidebar href="#">
                <RiPercentLine />
              </ASidebar>
            </LiSidebar>
            <LiSidebar>
              <ASidebar href="#">
                <RiGamepadLine />
              </ASidebar>
            </LiSidebar>
            <LiSidebar>
              <ButtonSidebar>
                <RiAccountCircleLine />
              </ButtonSidebar>
            </LiSidebar>
            <LiSidebar>
              <ButtonSidebar>
                {opencart ? (
                  <RiCloseLine onClick={() => setOpencart(!opencart)} />
                ) : (
                  <RiShoppingCart2Line onClick={() => setOpencart(!opencart)} />
                )}
              </ButtonSidebar>
            </LiSidebar>
          </UlSidebar>
          <SpanCopy>Buy Games © 2023</SpanCopy>
        </NavSidebar>
      </DivNav>

      {/* ---mobile button menu--- */}

      <ConteinerDivMobile>
        <NavMobile>
          <ButtonMobile>
            {/* ---Toggle system--- */}
            {open ? (
              <RiCloseLine onClick={() => setOpen(!open)} />
            ) : (
              <RiMenuUnfoldLine onClick={() => setOpen(!open)} />
            )}
          </ButtonMobile>
        </NavMobile>
      </ConteinerDivMobile>

      {/* ---cart--- */}

      <DivCart opencart={opencart}>
        <DivGralCart>
          <TittleCart>🛒 YOUR CART 🛒</TittleCart>
          <DivProducts>
            {cartItems && cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <CardBuy key={index}>
                  <DivArticles
                    style={{
                      backgroundImage: `url(${item.imgGame})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  >
                    <DivTitleNumber>
                      <TittleGame>{item.title}</TittleGame>
                      {item.quantity > 1 && (
                        <NumberProducts style={{ marginLeft: "5px" }}>
                          ({item.quantity}) ADDED GAMES
                        </NumberProducts>
                      )}
                    </DivTitleNumber>
                    <PriceGame>${item.price}</PriceGame>
                    <RiDeleteBin6Line
                      onClick={() => handleRemoveFromCart(index)}
                      style={{
                        cursor: "pointer",
                        background: "red",
                        padding: "2px",
                        fontSize: "20px",
                        borderRadius: "3px",
                      }}
                    />
                  </DivArticles>
                </CardBuy>
              ))
            ) : (
              <SpanEmptyCart>😭 THE CART IS EMPTY 😭</SpanEmptyCart>
            )}
          </DivProducts>
          <PriceTotal>THE TOTAL PRICE IS: ${calculateTotalPrice()}</PriceTotal>
          <PayCart onClick={handlePurchase}>BUY</PayCart>
        </DivGralCart>
        {showThanks && (
          <ThankYou>
            <h3>THANKS FOR YOUR PURCHASE</h3>
          </ThankYou>
        )}
      </DivCart>
    </>
  );
};

export default Sidebar;
