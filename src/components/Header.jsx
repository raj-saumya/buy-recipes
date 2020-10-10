import React from "react";
import CookingBanner from "../assets/cooking-banner.svg";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTextWrapper>
        <HeaderText>Get on</HeaderText>
        <div className="h-x"></div>
        <HeaderText>Your</HeaderText>
        <div className="h-x"></div>
        <HeaderText>Inner Chef.</HeaderText>
      </HeaderTextWrapper>
      <HeaderBannerImg src={CookingBanner} alt="cook-banner" />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  padding: 40px;
  background-color: #D84315;
  height: 300px;
  overflow: hidden;
  border-radius: 16px;
`;

const HeaderTextWrapper = styled.label`
  flex: 1;
`;

const HeaderText = styled.label`
  font-family: "Abril Fatface", cursive;
  color: #000;
  white-space: nowrap;
  font-size: 64px;
`;

const HeaderBannerImg = styled.img`
  height: 350px;
`;

export default Header;
