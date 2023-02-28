import React from "react";
import { FormStyled, InputStyled } from "./Form.Styled";

export const Form = () => {
  return (
    <FormStyled>
      <InputStyled
        placeholder="Mahsulot Va Toifalarni Qidirsh"
        aria-label="Please enter your search element"
      />
    </FormStyled>
  );
};
