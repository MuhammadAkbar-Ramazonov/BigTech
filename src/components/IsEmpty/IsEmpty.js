import React from "react";
import {
  SectionEmptyWrappertyled,
  SectionLinkStyled,
  SectiontitleStyled,
} from "./IsEmpty.styled";

export const IsEmpty = ({ title, children }) => {
  console.log(children);
  return (
    <SectionEmptyWrappertyled>
      <SectiontitleStyled>{title}</SectiontitleStyled>
      {children}
      <SectionLinkStyled to="/">bosh sahifa</SectionLinkStyled>
    </SectionEmptyWrappertyled>
  );
};
