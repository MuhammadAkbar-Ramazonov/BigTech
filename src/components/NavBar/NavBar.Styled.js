import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavBarStyled = styled.nav`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 5px 13px 33px 16px;
  background: #ffffff;
  box-shadow: 0px -0.5px 0px rgba(0, 0, 0, 0.1);
`;
export const ListStyled = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding-left: 0;
`;
export const NavLinkStyled = styled(NavLink)`
  display: block;
  color: #fff;
  text-decoration: none;
  &.active {
    color: #000;
  }
  :hover path,  :hover span ,:hover svg ,:hover circle  {
    color: #0538ff;
    fill: #fff;
    stroke: #0538ff;
  }
`;

export const ItemStyled = styled.li`
  text-align: center;
  color: #fff;
  &&:not(:last-child) {
    margin-right: 10px;
  }
`;
export const ImgStyled = styled.img``;
export const ImgDescStyled = styled.span`
  /* font-family: "TT Firs Neue"; */
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  display: block;
  color: #000;
  margin-top: 6px;
`;
