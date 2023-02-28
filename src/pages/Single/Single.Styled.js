import styled from "styled-components";

export const SectionStyled = styled.section`
  position: relative;
  margin-top: 37px;
  padding-bottom: 89px;
`;
export const SingleImgStyled = styled.img``;
export const SingleIconsWrapperSteled = styled.div`
  position: absolute;
  top: 10px;
  right: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SingleButtonStyled = styled.button`
  border: 0;
  background-color: transparent;
`;

export const SingleTitleStyled = styled.h2`
  font-family: "TT Firs Neue", "Arial", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  margin-top: 12px;
  margin-bottom: 2px;
  text-transform: capitalize;
  color: #000000;
`;
export const SinglePriceWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;
export const SingleNumberStyled = styled.span`
  font-family: "TT Firs Neue", "Arial", sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  text-transform: capitalize;
  color: #6956f4;
`;

export const SinglePriceStyled = styled.p`
  font-family: "TT Firs Neue", "Arial", sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  text-transform: capitalize;
  margin-top: 0;
  margin-bottom: 0;
  color: #bdbdbd;
`;

export const SingleCountStyled = styled(SingleNumberStyled)`
  font-family: "Poppins", "Arial", sans-serif;
  line-height: 22px;
  color: #3c4bdc;
`;
export const SingleInnerStyled = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 23px;
`;

export const SingleColorWrapperStyled = styled.div``;

export const SingleColorTitleStyled = styled.p`
  font-family: "Poppins", "Arial", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 12px;
  margin-top: 0;
  margin-bottom: 8px;
  color: #000000;
`;
export const SingleColorInnerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const SingleColorStyled = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 4px;
`;

export const SingleCountWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 34px;
  gap: 20px;
  padding: 1px 17px;
  border: 1px solid #eeeeee;
  border-radius: 8px;
`;

export const SingleCountBtnStyled = styled.button`
  font-family: "Poppins", "Arial", sans-serif;

  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  text-align: center;
  border: 0;
  background-color: transparent;
  color: #000000;
`;

export const SingleBtnWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 14px;
`;

export const SingleBtnOrderStyled = styled.button`
  font-family: "Poppins", "Arial", sans-serif;

  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  gap: 4px;
  padding: 10px 17px;
  color: #000000;
  background-color: transparent;
  border: 1px solid #eeeeee;
  border-radius: 8px;
`;
export const SingleBtnBuyStyled = styled(SingleBtnOrderStyled)`
  width: 176px;
  justify-content: center;
  text-transform: capitalize;
  padding: 10px 20px;
  color: #fff;
  background-color: #000000;
  border-radius: 8px;
`;

export const SingleQuestionWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 14px;
`;

export const SingleQuestionTextStyled = styled.p`
  font-family: "Poppins", "Arial", sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  margin-top: 0;
  margin-bottom: 0;
  text-transform: capitalize;
  color: #000000;
`;

export const SingleTovarDescWrapperStyled = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2px 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 12px;
  padding-bottom: 170px;
`;

export const SingleTovarDescStyled = styled.li`
  font-family: "Poppins", "Arial", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 18px;
  margin-top: 0;
  margin-bottom: 0;
  text-transform: capitalize;
  color: #000000;
`;

export const SingleAllPriceWrapperStyled = styled.div`
  position: fixed;
  bottom: 89px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 17px 15px;
  background-color: #f9f9f9;
  border-radius: 8px;
`;

export const SingleAllPriceStyled = styled.p`
  font-family: "Poppins", "Arial", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  gap: 2px;
  margin-top: 0;
  margin-bottom: 0;
  text-transform: capitalize;
  color: #000000;
`;

export const SingleAllBuyStyled = styled(SingleBtnBuyStyled)`
  width: 144px;
`;
