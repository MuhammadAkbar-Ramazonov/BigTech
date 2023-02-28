import React from "react";
import {
  CategoriesItemStyled,
  CategoriesImgStyled,
  SectionItemTitleStyled,
  CategoriesImgInnerStyled,
  SectionItemLinkStyled,
} from "./CategoryItem.Styled";

export const CategoryItem = ({ data }) => {
  const { img, name } = data;

  return (
    <SectionItemLinkStyled to="single">
      <CategoriesItemStyled>
        <CategoriesImgInnerStyled>
          <CategoriesImgStyled src={img} alt={name} />
        </CategoriesImgInnerStyled>
        <SectionItemTitleStyled>{name}</SectionItemTitleStyled>
      </CategoriesItemStyled>
    </SectionItemLinkStyled>
  );
};
