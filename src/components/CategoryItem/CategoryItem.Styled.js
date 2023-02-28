import { Link } from "react-router-dom";
import styled from "styled-components";

export const CategoriesItemStyled = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CategoriesImgInnerStyled = styled.div`
  width: 97px;
  margin-right: 9px;
  padding: 13px 18px;
  background-color: #f5f5f5;
  border: 0.5px solid #6792f4;
  border-radius: 8px;
`;
export const CategoriesImgStyled = styled.img``;

export const SectionItemTitleStyled = styled.h3`
  font-family: "TT Firs Neue", "Arial", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  text-transform: capitalize;
  margin-top: 0;
  margin-bottom: 0;
  color: #020105;
`;

export const SectionItemLinkStyled = styled(Link)`
  text-decoration: none;
`;
