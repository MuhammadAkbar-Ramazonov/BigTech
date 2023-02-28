import { Logo } from "../../assets/images/images";
import { Container } from "../../assets/styles/Global.styled";
import { ProductItem } from "../../components/ProductItem";
import {
  HeaderLinkStyled,
  HeaderliStyled,
  HeaderNavLinkStyled,
  HeaderNavStyled,
  HeaderStyled,
  HeaderTitleStyled,
  HeaderUlStyled,
  HomeListStyled,
  MainStyled,
  SectionStyled,
  SectiontitleStyled,
} from "./Home.styled";

import { useFeatchData } from "../../hooks/useFeatchData";
import { Form } from "../../components/Form";

export const Home = () => {
  const { isLoading, data, isError, error } = useFeatchData(
    "http://localhost:8080/product",
    "products-list",
    {}
  );
  const { data: categoryData } = useFeatchData(
    "http://localhost:8080/category",
    "category-list",
    {}
  );

  return (
    <>
    
      <HeaderStyled>
        <HeaderTitleStyled className="visually-hidden">
          Big Tech Sifatli Mahsulotlarni ishonchli qollardin olishingiz mumkun
        </HeaderTitleStyled>
        <Container>
          <HeaderLinkStyled to="/">
            <Logo />
          </HeaderLinkStyled>

          <Form />

          <HeaderNavStyled>
            <HeaderUlStyled>
              {categoryData?.data.map((item) => (
                <HeaderliStyled key={item.id}>
                  <HeaderNavLinkStyled to={`/${item.path}`}>
                    {item.name}
                  </HeaderNavLinkStyled>
                </HeaderliStyled>
              ))}
            </HeaderUlStyled>
          </HeaderNavStyled>
        </Container>
      </HeaderStyled>
      <MainStyled>
        <SectionStyled>
          <Container>
            <SectiontitleStyled>top tovarlar</SectiontitleStyled>
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
