import React from "react";
import styled from "styled-components/native";

const ImageContainer = styled.View`
  width: 21%;
  height: 75%;
  align-items: center;
  justify-content: center;
  background: #1e2d3e;
`;
const EmerjImage = styled.Image`
  width: 61px;
  height: 55px;
  border-width: 2px;
`;

export default function EmerjLogo() {
  return (
    <ImageContainer>
      <EmerjImage
        source={require("../../../assets/images/logo_emerj_principal.png")}
      />
    </ImageContainer>
  );
}
