import React, { useState } from "react";
import Sidebar from "./shared/Sidebar.js";
import Main from "./main/Main.js";
import Cards from "./cards/Cards.js";
import Footer from "./footer/Footer.js"

function App() {
  const [cartItems, setCartItems] = useState([]);
  

  return (
    <>
      <Sidebar cartItems={cartItems} setCartItems={setCartItems} />
      <Main cartItems={cartItems} setCartItems={setCartItems} />
      <Cards cartItems={cartItems} setCartItems={setCartItems} />
      <Footer></Footer>
    </>
  );
}

export default App;