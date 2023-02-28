import React from "react";
import { LikeHeart } from "../../assets/images/images";
import {
  LikeItemButtonStyled,
  LikeItemCountStyled,
  LikeItemImgStyled,
  LikeItemImgWrapperStyled,
  LikeItemInnerStyled,
  LikeItemLikeHeartStyled,
  LikeItemPriceStyled,
  LikeItemStyled,
  LikeItemTitleStyled,
  LikeItemWrapperStyled,
} from "./LikeItem.styled";

export const LikeItem = ({ data }) => {
  const { price, img, name, count } = data;
  return (
    <LikeItemStyled>
      <LikeItemImgWrapperStyled>
        <LikeItemImgStyled src={img} alt={name} />
      </LikeItemImgWrapperStyled>
      <LikeItemWrapperStyled>
        <LikeItemTitleStyled>{name}</LikeItemTitleStyled>
        <LikeItemPriceStyled>{price}</LikeItemPriceStyled>
        <LikeItemLikeHeartStyled>
          <LikeHeart />
        </LikeItemLikeHeartStyled>
        <LikeItemInnerStyled>
          <LikeItemCountStyled>{count} hozirda mavjud </LikeItemCountStyled>
          <LikeItemButtonStyled to="/single">Sotib olish</LikeItemButtonStyled>
        </LikeItemInnerStyled>
      </LikeItemWrapperStyled>
    </LikeItemStyled>
  );
};
