import { Container } from "../../assets/styles/Global.styled";
import { ProductItem } from "../../components/ProductItem";
import {
  HeaderStyled,
  HeaderTitleStyled,
  HomeListStyled,
  MainStyled,
  SectionStyled,
} from "./CategorySingle.styled";

import { useFeatchData } from "../../hooks/useFeatchData";
import { Form } from "../../components/Form";

export const CategorySingle = () => {
  const { isLoading, data, isError, error } = useFeatchData(
    "http://localhost:8080/product",
    "products-list",
    {}
  );

  return (
    <>
      <HeaderStyled>
        <Container>
          <HeaderTitleStyled>Smartfonlar</HeaderTitleStyled>
          <Form />
        </Container>
      </HeaderStyled>
      <MainStyled>
        <SectionStyled>
          <Container>
            {isError ? <h2>{error.message}</h2> : ""}
            {isLoading ? <h2>Loading</h2> : ""}
            {data?.data.length ? (
              <HomeListStyled>
                {data?.data.map((element) => (
                  <ProductItem key={element.id} data={element} />
                ))}
              </HomeListStyled>
            ) : (
              <h3>Products is Empty</h3>
            )}
          </Container>
        </SectionStyled>
      </MainStyled>
    </>
  );
};
