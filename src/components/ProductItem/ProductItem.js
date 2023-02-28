import React from "react";
import { CartIcon, Heart } from "../../assets/images/images";
import {
  HomeHeartStyled,
  HomeImgStyled,
  HomeItemCartStyled,
  HomeItemDescStyled,
  HomeItemLinkStyled,
  HomeItemStyled,
  HomeItemWrapperStyled,
  HomeWrapperStyled,
  SectionItemTitleStyled,
} from "./ProductItem.Styled";
import { useCart } from "react-use-cart";
export const ProductItem = ({ data }) => {
  const { img, title, price } = data;
  const { addItem } = useCart();
  return (
    <HomeItemStyled>
      <HomeWrapperStyled>
        <HomeImgStyled src={img} />
        <HomeHeartStyled>
          <Heart />
        </HomeHeartStyled>
      </HomeWrapperStyled>
      <SectionItemTitleStyled>{title}</SectionItemTitleStyled>
      <HomeItemDescStyled>{price}</HomeItemDescStyled>
      <HomeItemWrapperStyled>
        <HomeItemLinkStyled to="/single">Sotib olish</HomeItemLinkStyled>
        <HomeItemCartStyled onClick={() => addItem(data)}>
          <CartIcon />
        </HomeItemCartStyled>
      </HomeItemWrapperStyled>
    </HomeItemStyled>
  );
};
