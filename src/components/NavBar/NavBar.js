import React from "react";
import {
  ImgDescStyled,
  ItemStyled,
  ListStyled,
  NavBarStyled,
  NavLinkStyled,
} from "./NavBar.Styled";
import { Cart, Category, Home, Like, Profil } from "../../assets/images/images";
export const NavBar = () => {
  return (
    <NavBarStyled>
      <ListStyled>
        <ItemStyled>
          <NavLinkStyled
            className={(isActive) => (isActive ? "active" : "")}
            to="/"
          >
            <Home />
            <ImgDescStyled>Главная</ImgDescStyled>
          </NavLinkStyled>
        </ItemStyled>
        <ItemStyled>
          <NavLinkStyled
            className={(isActive) => (isActive ? "active" : "")}
            to="/category"
          >
            <Category />
            <ImgDescStyled>Категории</ImgDescStyled>
          </NavLinkStyled>
        </ItemStyled>
        <ItemStyled>
          <NavLinkStyled
            className={(isActive) => (isActive ? "active" : "")}
            to="/like"
          >
            <Like />
            <ImgDescStyled>Избранное</ImgDescStyled>
          </NavLinkStyled>
        </ItemStyled>
        <ItemStyled>
          <NavLinkStyled
            className={(isActive) => (isActive ? "active" : "")}
            to="/cart"
          >
            <Cart />
            <ImgDescStyled>Корзина</ImgDescStyled>
          </NavLinkStyled>
        </ItemStyled>
        <ItemStyled>
          <NavLinkStyled
            className={(isActive) => (isActive ? "active" : "")}
            to="/profile"
          >
            <Profil />
            <ImgDescStyled>Профиль</ImgDescStyled>
          </NavLinkStyled>
        </ItemStyled>
      </ListStyled>
    </NavBarStyled>
  );
};
