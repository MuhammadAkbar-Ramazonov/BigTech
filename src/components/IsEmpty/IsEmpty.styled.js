import { Link } from "react-router-dom";
import styled from "styled-components";

export const SectionEmptyWrappertyled = styled.div`
  max-width: 350px;
  margin: 0 auto;
  margin-top: 121px;
`;

export const SectiontitleStyled = styled.h2`
  font-family: "Inter", "Arial", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  margin-top: 0;
  margin-bottom: 4px;
  text-transform: capitalize;
  color: #000;
`;

export const SectionLinkStyled = styled(Link)`
  display: block;
  font-family: "Inter", "Arial", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  width: 219px;
  margin: 0 auto;
  padding: 11px 20px;
  text-decoration: none;
  text-align: center;
  text-transform: capitalize;
  color: #ffffff;
  background-color: #000;
  border-radius: 8px;
`;
