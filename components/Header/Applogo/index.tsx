import React from "react";
import styled from "styled-components/native";

const ImageContainer = styled.View`
  flex: 1;
`;
const LogoIcon = styled.Image`
  position: absolute;
  width: 40%;
  height: 100%;
  margin-top: -19%;
  margin-left: 27%;
  margin-bottom: 18%;
  z-index: 3;
`;
export default function AppLogo(props: any) {
  return (
    <ImageContainer>
      <LogoIcon source={require("../../../assets/images/logoapp.png")} />
    </ImageContainer>
  );
}