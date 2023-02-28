import { useCart } from "react-use-cart";
import { Heart } from "../../assets/images/images";
import { Container } from "../../assets/styles/Global.styled";
import { IsEmpty } from "../../components/IsEmpty/IsEmpty";
import { LikeItem } from "../../components/LikeItem/LikeItem";
import { useFeatchData } from "../../hooks/useFeatchData";
import {
  HeaderStyled,
  HeaderTitleStyled,
  HomeListStyled,
  MainStyled,
  SectionDescStyled,
  SectionStyled,
} from "./Cart.styled";

export const Cart = () => {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } = useCart();

  return (
    <>
      {items.map((item) => (
        <li key={item.id}>
          {item.quantity} x {item.name} &mdash;
          <button
            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
          >
            -
          </button>
          <button
            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
          >
            +
          </button>
          <button onClick={() => removeItem(item.id)}>&times;</button>
        </li>
      ))}

      <HeaderStyled>
        <Container>
          <HeaderTitleStyled>Savat</HeaderTitleStyled>
        </Container>
      </HeaderStyled>
      <MainStyled>
        <SectionStyled>
          <Container>
            {!isEmpty ? (
              <HomeListStyled>
                {items?.map((element) => (
                  <LikeItem key={element.id} data={element} />
                ))}
              </HomeListStyled>
            ) : (
              <IsEmpty title="Savatda hozircha mahsulot yo’q ">
                <SectionDescStyled>
                  bosh sahifadagi termalardan boshlang yoke kerakli mahsulotni
                  qidiruv orqali orqali toping
                </SectionDescStyled>
              </IsEmpty>
            )}
          </Container>
        </SectionStyled>
      </MainStyled>
    </>
  );
};
