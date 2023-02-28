import styled from "styled-components";
import SearchIcon from "../../assets/images/Search.svg";

export const FormStyled = styled.form`
  margin-bottom: 12px;
`;

export const InputStyled = styled.input`
  width: 100%;
  padding: 13px 38px;
  background-color: #f5f5f7;
  background-image: url(${SearchIcon});
  background-repeat: no-repeat;
  background-position: 12px center;
  background-size: 16px 16px;
  border: 0;
  border-radius: 8px;

  ::placeholder {
    line-height: 28px;
    text-transform: capitalize;
    color: #9a999b;
  }
`;
