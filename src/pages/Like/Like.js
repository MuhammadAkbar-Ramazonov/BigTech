import { Container } from "../../assets/styles/Global.styled";
import { LikeItem } from "../../components/LikeItem";
import {
  HeaderStyled,
  HeaderTitleStyled,
  HomeListStyled,
  MainStyled,
  SectionDescStyled,
  SectionStyled,
} from "./Like.styled";

import { useFeatchData } from "../../hooks/useFeatchData";
import { Heart } from "../../assets/images/images";
import { IsEmpty } from "../../components/IsEmpty/IsEmpty";

export const Like = () => {
  const { isLoading, data, isError, error } = useFeatchData(
    "http://localhost:8080/like",
    "products-list",
    {}
  );

  return (
    <>
      <HeaderStyled>
        <Container>
          <HeaderTitleStyled>Sevimlilar</HeaderTitleStyled>
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
                  <LikeItem key={element.id} data={element} />
                ))}
              </HomeListStyled>
            ) : (
              <IsEmpty title="yoqqan mahsulotni qo’shing">
                <SectionDescStyled>
                  bosh sahifaga o’ting va mahsulotdagi
                  <Heart />
                  belgisini bosing
                </SectionDescStyled>
              </IsEmpty>
            )}
          </Container>
        </SectionStyled>
      </MainStyled>
    </>
  );
};
