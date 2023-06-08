import React from "react";
import {
  DivMain,
  MainMain,
  WallpaperHome,
  TittleSales,
  TittleCategories,
} from "./MainStyled";
import miles from "../../assets/img/Wallpaper Miles Morales.png";
import sale from "../../assets/img/Sale.png";

const Main = () => {
  return (
    <>
      <MainMain>
        <header>
          <DivMain>
            <WallpaperHome src={miles}></WallpaperHome>
          </DivMain>
          <DivMain>
            <TittleSales>❄WINTER HOLIDAY DEALS❄</TittleSales>
            <WallpaperHome src={sale}></WallpaperHome>
          </DivMain>
        </header>
        <DivMain>
          <TittleCategories>WHAT DO YOU WANT TO PLAY TODAY?</TittleCategories>
        </DivMain>
      </MainMain>
    </>
  );
};

export default Main;