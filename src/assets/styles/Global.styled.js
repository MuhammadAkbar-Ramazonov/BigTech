import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* inter-regular - latin */
@font-face {
  font-display: swap; 
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/inter-v12-latin-regular.woff2') format('woff2'), 
  url('../fonts/inter-v12-latin-regular.woff') format('woff'); 
}
@font-face {
  font-display: swap; 
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  src: url('../fonts/inter-v12-latin-500.woff2') format('woff2'),
  url('../fonts/inter-v12-latin-500.woff') format('woff'); 
}
@font-face {
  font-display: swap; 
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  src: url('../fonts/inter-v12-latin-600.woff2') format('woff2'),
  url('../fonts/inter-v12-latin-600.woff') format('woff'); 
}
@font-face {
  font-display: swap; 
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  src: url('../fonts/inter-v12-latin-700.woff2') format('woff2'),
  url('../fonts/inter-v12-latin-700.woff') format('woff'); 
}
@font-face {
  font-display: swap; 
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  src: url('../fonts/roboto-v30-latin-300.woff2') format('woff2'), 
  url('../fonts/roboto-v30-latin-300.woff') format('woff'); 
}
@font-face {
  font-display: swap; 
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/roboto-v30-latin-regular.woff2') format('woff2'), 
  url('../fonts/roboto-v30-latin-regular.woff') format('woff'); 
}
@font-face {
  font-display: swap; 
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  src: url('../fonts/roboto-v30-latin-500.woff2') format('woff2'), 
  url('../fonts/roboto-v30-latin-500.woff') format('woff'); 
}
@font-face {
  font-display: swap; 
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  src: url('../fonts/roboto-v30-latin-700.woff2') format('woff2'), 
  url('../fonts/roboto-v30-latin-700.woff') format('woff'); 
}
@font-face {
  font-display: swap; 
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  src: url('../fonts/roboto-v30-latin-900.woff2') format('woff2'), 
  url('../fonts/roboto-v30-latin-900.woff') format('woff'); 
}
@font-face {
  font-display: swap; 
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  src: url('../fonts/poppins-v20-latin-300.woff2') format('woff2'), 
  url('../fonts/poppins-v20-latin-300.woff') format('woff'); 
}
@font-face {
  font-display: swap; 
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/poppins-v20-latin-regular.woff2') format('woff2'), 
  url('../fonts/poppins-v20-latin-regular.woff') format('woff'); 
}
@font-face {
  font-display: swap; 
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  src: url('../fonts/poppins-v20-latin-500.woff2') format('woff2'), 
  url('../fonts/poppins-v20-latin-500.woff') format('woff'); 
}
@font-face {
  font-display: swap; 
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  src: url('../fonts/poppins-v20-latin-600.woff2') format('woff2'), 
  url('../fonts/poppins-v20-latin-600.woff') format('woff'); 
}

@font-face {
  font-display: swap; 
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/montserrat-v25-latin-regular.woff2') format('woff2'), 
  url('../fonts/montserrat-v25-latin-regular.woff') format('woff'); 
}
@font-face {
  font-display: swap; 
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  src: url('../fonts/montserrat-v25-latin-500.woff2') format('woff2'), 
  url('../fonts/montserrat-v25-latin-500.woff') format('woff'); 
}
@font-face {
  font-display: swap; 
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  src: url('../fonts/montserrat-v25-latin-600.woff2') format('woff2'), 
  url('../fonts/montserrat-v25-latin-600.woff') format('woff'); 
}
@font-face {
  font-display: swap; 
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  src: url('../fonts/montserrat-v25-latin-700.woff2') format('woff2'), 
  url('../fonts/montserrat-v25-latin-700.woff') format('woff'); 
}

@font-face {
  font-display: swap; 
  font-family: 'Montserrat Alternates';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/montserrat-alternates-v17-latin-regular.woff2') format('woff2'), 
  url('../fonts/montserrat-alternates-v17-latin-regular.woff') format('woff'); 
}
@font-face {
  font-display: swap; 
  font-family: 'Montserrat Alternates';
  font-style: normal;
  font-weight: 500;
  src: url('../fonts/montserrat-alternates-v17-latin-500.woff2') format('woff2'), 
  url('../fonts/montserrat-alternates-v17-latin-500.woff') format('woff'); 
}
@font-face {
  font-display: swap; 
  font-family: 'Montserrat Alternates';
  font-style: normal;
  font-weight: 600;
  src: url('../fonts/montserrat-alternates-v17-latin-600.woff2') format('woff2'), 
  url('../fonts/montserrat-alternates-v17-latin-600.woff') format('woff'); 
}
@font-face {
  font-display: swap; 
  font-family: 'Comic Neue';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/comic-neue-v8-latin-regular.woff2') format('woff2'),
  url('../fonts/comic-neue-v8-latin-regular.woff') format('woff'); 
}
@font-face {
  font-family: 'SF Pro Display';
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  src: url('../fonts/SFProDisplay-Regular.woff2') format('woff2'),
  url('../fonts/SFProDisplay-Regular.woff') format('woff');
}

@font-face {
  font-family: 'SF Pro Display';
  src: url('../fonts/SFProDisplay-Bold.woff2') format('woff2'),
  url('../fonts/SFProDisplay-Bold.woff') format('woff');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'TT Firs Neue';
  src: url('../fonts/TTFirsNeue-DemiBold.woff2') format('woff2'),
  url('../fonts/TTFirsNeue-DemiBold.woff') format('woff');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'TT Firs Neue';
  src: url('../fonts/TTFirsNeue-Light.woff2') format('woff2'),
  url('../fonts/TTFirsNeue-Light.woff') format('woff');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}


@font-face {
  font-family: 'TT Firs Neue';
  src: url('../fonts/TTFirsNeue-Medium.woff2') format('woff2'),
  url('../fonts/TTFirsNeue-Medium.woff') format('woff');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'TT Firs Neue';
  src: url('../fonts/TTFirsNeue-Regular.woff2') format('woff2'),
  url('../fonts/TTFirsNeue-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

* { 
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Inter", "Arial", sans-serif;
  font-weight: 400;
  overflow-x: hidden;
  overflow-y: scroll;
}

img {
  display: block;
}

/* header 1 part start */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  border: 0;
  clip: rect(0 0 0 0)
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  padding-top: 22px;
  border-radius: 10px;
  padding-bottom: 23px;
  border: 1px solid rgb(103, 146, 244);
}
.swiper-pagination-bullet-active{
  width: 8px;
  height: 8px;
  margin-right: 4px!important;
  background-color: #000!important;
  
}.swiper-pagination-bullet{
  background-color: #eee;
  opacity: 1;
}
.swiper-pagination{
  bottom: -4px!important;
}
.swiper-slide {
  padding-top: 34px;
  padding-bottom: 34px;
}
`;
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-right: 16px;
  padding-left: 16px;
`;
