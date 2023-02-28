import { Link } from "react-router-dom";
import styled from "styled-components";

export const LikeItemStyled = styled.li`
  position: relative;
  width: 361px;
  display: flex;
  align-items: center;
  padding: 10px 10px 10px 12px;
  border: 1px solid #eeeeee;
  border-radius: 10px;
`;
export const LikeItemImgWrapperStyled = styled.div`
  margin-right: 8px;
  padding: 6px 16px;
  border: 1px solid #eeeeee;
  border-radius: 10px;
`;
export const LikeItemImgStyled = styled.img``;
export const LikeItemWrapperStyled = styled.div`
  flex-grow: 1;
`;
export const LikeItemTitleStyled = styled.h3`
  font-family: "TT Firs Neue", "Arial", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  margin-top: 0;
  margin-bottom: 4px;
  text-transform: capitalize;
  color: #000000;
`;
export const LikeItemPriceStyled = styled.p`
  font-family: "TT Firs Neue", "Arial", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  margin-top: 0;
  margin-bottom: 4px;
  text-transform: capitalize;
  color: #3c4bdc;
`;

export const LikeItemLikeHeartStyled = styled.div`
  position: absolute;
  top: 10px;
  right: 14px;
`;
export const LikeItemInnerStyled = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
export const LikeItemCountStyled = styled.p`
  font-family: "TT Firs Neue", "Arial", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 16px;
  margin-top: 0;
  margin-bottom: 0;
  text-transform: capitalize;
  color: #bdbdbd;
`;
export const LikeItemButtonStyled = styled(Link)`
  font-family: "TT Firs Neue", "Arial", sans-serif;
  font-weight: 500;
  width: 127px;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  text-decoration: none;
  margin-top: 7px;
  padding: 6px 20px;
  color: #fff;
  background-color: #000;
  border-radius: 8px;
`;
