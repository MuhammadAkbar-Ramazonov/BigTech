import React from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Lang } from "./components/Lang/Lang";
import { NavBar } from "./components/NavBar";
import { GlobalStyle } from "./assets/styles/Global.styled";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Category } from "./pages/Category";
import { Like } from "./pages/Like";
import { QueryClientProvider, QueryClient } from "react-query";
import { Single } from "./pages/Single";
import { CategorySingle } from "./pages/CategorySingle";
import { CartProvider } from "react-use-cart";
import { Cart } from "./pages/Cart/Cart";
const queryClient = new QueryClient();

export const App = () => {
  i18n.use(initReactI18next).init({
    fallbackLng: localStorage.getItem("lang") || "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: Lang.en,
      },
      ru: {
        translation: Lang.ru,
      },
      uz: {
        translation: Lang.uz,
      },
    },
  });

  return (
    <>
      <CartProvider>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category*" element={<Category />} />
            <Route path="/like" element={<Like />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Like />} />
            <Route path="/single" element={<Single />} />
            <Route path="/category/single" element={<CategorySingle />} />
          </Routes>
          <NavBar />

          <GlobalStyle />
        </QueryClientProvider>
      </CartProvider>
    </>
  );
};
