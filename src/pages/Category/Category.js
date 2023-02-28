import React from "react";
import { Container } from "../../assets/styles/Global.styled";
import { Form } from "../../components/Form";
import { useFeatchData } from "../../hooks/useFeatchData";
import {
  CategoryListStyled,
  HeaderStyled,
  HeaderTitleStyled,
  MainStyled,
  SectionStyled,
  SectiontitleStyled,
} from "./Category.styled";
import { CategoryItem } from "../../components/CategoryItem";
export const Category = () => {
  const { isLoading, data, isError, error } = useFeatchData(
    "http://localhost:8080/categories",
    "category-list",
    {}
  );

  return (
    <>
      <HeaderStyled>
        <Container>
          <HeaderTitleStyled>Kategoriya</HeaderTitleStyled>
          <Form />
        </Container>
      </HeaderStyled>
      <MainStyled>
        <SectionStyled>
          <Container>
            <SectiontitleStyled>Ommabop toifalar</SectiontitleStyled>
            {isError ? <h2>{error.message}</h2> : ""}
            {isLoading ? <h2>Loading</h2> : ""}
            {data?.data.length ? (
              <CategoryListStyled>
                {data?.data.map((element) => (
                  <CategoryItem key={element.id} data={element} />
                ))}
              </CategoryListStyled>
            ) : (
              <h3>Products is Empty</h3>
            )}
          </Container>
        </SectionStyled>
      </MainStyled>
    </>
  );
};
