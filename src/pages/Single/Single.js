import { Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "../../assets/styles/Global.styled";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  SectionStyled,
  SingleAllBuyStyled,
  SingleAllPriceStyled,
  SingleAllPriceWrapperStyled,
  SingleBtnBuyStyled,
  SingleBtnOrderStyled,
  SingleBtnWrapperStyled,
  SingleButtonStyled,
  SingleColorInnerStyled,
  SingleColorStyled,
  SingleColorTitleStyled,
  SingleColorWrapperStyled,
  SingleCountBtnStyled,
  SingleCountStyled,
  SingleCountWrapperStyled,
  SingleIconsWrapperSteled,
  SingleImgStyled,
  SingleInnerStyled,
  SingleNumberStyled,
  SinglePriceStyled,
  SinglePriceWrapperStyled,
  SingleQuestionTextStyled,
  SingleQuestionWrapperStyled,
  SingleTitleStyled,
  SingleTovarDescStyled,
  SingleTovarDescWrapperStyled,
} from "./Single.Styled";
import { useFeatchData } from "../../hooks/useFeatchData";
import {
  CategoryCart,
  Heart,
  Question,
  Share,
} from "../../assets/images/images";
import { useDispatch, useSelector } from "react-redux";
import { decCount, incCount } from "../../redux/counter/userAction";
export const Single = () => {
  const { data } = useFeatchData(
    "http://localhost:8080/single",
    "single-list",
    {}
  );
  const dispatch = useDispatch();
  const sum = data?.data.price;

  const state = useSelector((state) => state);
  return (
    <SectionStyled>
      <Container>
        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {data?.data.images.map((item) => (
            <SwiperSlide key={item.id} style={{ position: "relative" }}>
              <SingleIconsWrapperSteled>
                <SingleButtonStyled>
                  <Share />
                </SingleButtonStyled>
                <SingleButtonStyled>
                  <Heart />
                </SingleButtonStyled>
              </SingleIconsWrapperSteled>
              <SingleImgStyled width="180" height="213" src={item.img} />
            </SwiperSlide>
          ))}
        </Swiper>
        <SingleTitleStyled>{data?.data.name}</SingleTitleStyled>
        <SinglePriceWrapperStyled>
          <SinglePriceStyled glePriceStyled>
            <SingleNumberStyled>{data?.data.price} </SingleNumberStyled>
            so’mdan
          </SinglePriceStyled>
          <SingleCountStyled>
            {data?.data.count > 0
              ? `Mavjud:${data?.data.count}`
              : "Mavjud emas"}
          </SingleCountStyled>
        </SinglePriceWrapperStyled>

        <SingleInnerStyled>
          <SingleColorWrapperStyled>
            <SingleColorTitleStyled>rangini tanlang</SingleColorTitleStyled>
            <SingleColorInnerStyled>
              {data?.data.colors.map((item) => (
                <SingleColorStyled
                  key={item.id}
                  style={{ backgroundColor: item.color }}
                ></SingleColorStyled>
              ))}
            </SingleColorInnerStyled>
          </SingleColorWrapperStyled>
          <SingleCountWrapperStyled>
            <SingleCountBtnStyled
              onClick={() => {
                dispatch(incCount());
              }}
            >
              +
            </SingleCountBtnStyled>
            <SingleCountBtnStyled as="p">
              {state.numOfCount.numOfCount}
            </SingleCountBtnStyled>
            <SingleCountBtnStyled
              onClick={() => {
                dispatch(decCount());
              }}
            >
              -
            </SingleCountBtnStyled>
          </SingleCountWrapperStyled>
        </SingleInnerStyled>

        <SingleBtnWrapperStyled>
          <SingleBtnOrderStyled>
            <CategoryCart />
            Savatga qo’shish
          </SingleBtnOrderStyled>
          <SingleBtnBuyStyled>sotib olish</SingleBtnBuyStyled>
        </SingleBtnWrapperStyled>
        <SingleQuestionWrapperStyled>
          <Question />
          <SingleQuestionTextStyled>tovar tavsifi</SingleQuestionTextStyled>
        </SingleQuestionWrapperStyled>

        <SingleTovarDescWrapperStyled>
          <SingleTovarDescStyled>iPhone 14 Pro Max</SingleTovarDescStyled>
          <SingleTovarDescStyled>iPhone 14 Pro Max</SingleTovarDescStyled>
          <SingleTovarDescStyled>iPhone 14 Pro Max</SingleTovarDescStyled>
          <SingleTovarDescStyled>iPhone 14 Pro Max</SingleTovarDescStyled>
          <SingleTovarDescStyled>iPhone 14 Pro Max</SingleTovarDescStyled>
          <SingleTovarDescStyled>iPhone 14 Pro Max</SingleTovarDescStyled>
          <SingleTovarDescStyled>iPhone 14 Pro Max</SingleTovarDescStyled>
          <SingleTovarDescStyled>iPhone 14 Pro Max</SingleTovarDescStyled>
          <SingleTovarDescStyled>iPhone 14 Pro Max</SingleTovarDescStyled>
          <SingleTovarDescStyled>iPhone 14 Pro Max</SingleTovarDescStyled>
          <SingleTovarDescStyled>iPhone 14 Pro Max</SingleTovarDescStyled>
          <SingleTovarDescStyled>iPhone 14 Pro Max</SingleTovarDescStyled>
        </SingleTovarDescWrapperStyled>

      </Container>
        <SingleAllPriceWrapperStyled>
          <SingleAllPriceStyled>
            {state.numOfCount.numOfCount > 0
              ? Number(sum?.split(" ").join("")) *
                Number(state.numOfCount.numOfCount)
              : data?.data.price}
            <SingleAllPriceStyled> so’m</SingleAllPriceStyled>
          </SingleAllPriceStyled>
          <SingleAllBuyStyled>sotib olish</SingleAllBuyStyled>
        </SingleAllPriceWrapperStyled>
    </SectionStyled>
  );
};
