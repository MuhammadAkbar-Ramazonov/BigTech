import styled from "styled-components";
export const HeaderStyled = styled.header`
  padding-top: 26px;
  padding-bottom: 23px;
`;
export const HeaderTitleStyled = styled.h2`
  font-family: "TT Firs Neue", "Arial", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  margin-top: 0;
  margin-bottom: 14px;
  text-align: center;
  text-transform: capitalize;
  color: #000;
`;

export const MainStyled = styled.main``;

export const SectionStyled = styled.section`
  padding-bottom: 86px;
`;

export const SectiontitleStyled = styled.h2`
  font-family: "TT Firs Neue", "Arial", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  margin-top: 0;
  margin-bottom: 1upx;
  text-transform: capitalize;
  color: #000000;
`;

export const CategoryListStyled = styled.ul`
  /* display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: auto auto;
  gap: 11px 17px;
  list-style: none;
  padding-left: 0;
  @media (min-width: 411px) {
    grid-template-columns: auto auto auto;
  }
`;
