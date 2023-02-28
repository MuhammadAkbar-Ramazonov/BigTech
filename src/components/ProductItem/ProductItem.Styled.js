import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeItemStyled = styled.li``;

export const HomeWrapperStyled = styled.div`
  position: relative;
  width: 177px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2px;
  padding: 50px 0;
  border: 1px solid #eeeeee;
  border-radius: 10px;
`;

export const HomeImgStyled = styled.img``;

export const HomeHeartStyled = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const SectionItemTitleStyled = styled.h3`
  font-family: "TT Firs Neue";
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  margin-top: 0;
  margin-bottom: 2px;
  text-transform: capitalize;
  color: #000000;
`;

export const HomeItemDescStyled = styled.p`
  font-family: "TT Firs Neue";
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  margin-top: 0;
  margin-bottom: 5px;
  text-transform: capitalize;
  color: #6956f4;
`;
export const HomeItemWrapperStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const HomeItemLinkStyled = styled(Link)`
  font-family: "TT Firs Neue";
  width: 127px;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  text-decoration: none;
  text-align: center;
  margin-right: 5px;
  padding: 6px 20px;
  color: #ffffff;
  background-color: #000000;
  border-radius: 8px;
`;

export const HomeItemCartStyled = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  background-color: #ededed;
  border-radius: 50%;
  border: 0;
`;
