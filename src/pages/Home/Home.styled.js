import { Link } from "react-router-dom";
import styled from "styled-components";
export const HeaderStyled = styled.header`
  padding-top: 26px;
  padding-bottom: 20px;
`;
export const HeaderTitleStyled = styled.h1``;

export const HeaderLinkStyled = styled(Link)`
  text-decoration: none;
  display: block;
  margin-bottom: 22px;
`;

export const HeaderNavStyled = styled.nav`
  margin-bottom: 20px;
`;
export const HeaderUlStyled = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: 0;
  overflow-x: scroll;
`;
export const HeaderliStyled = styled.li`
  :not(:last-child) {
    margin-right: 4px;
  }
`;
export const HeaderNavLinkStyled = styled(Link)`
  font-family: "Poppins", "Arial", sans-serif;
  width: 113px;
  display: block;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  padding: 6px 15px;
  text-align: center;
  text-decoration: none;
  text-transform: capitalize;
  background-color: #f9f9f9;
  border-radius: 10px;
  color: #000;
`;

export const MainStyled = styled.main``;

export const SectionStyled = styled.section`
  padding-bottom: 159px;
`;

export const SectiontitleStyled = styled.h2`
  font-family: "TT Firs Neue";
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  margin-top: 0;
  margin-bottom: 12px;
  text-transform: capitalize;
  color: #000000;
`;

export const HomeListStyled = styled(HeaderUlStyled)`
  overflow-x: hidden;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
`;
