import React from "react";
import styled from "styled-components/native";

const ImageContainer = styled.View`
  flex: 1;
  height: 99%;
  margin-left: 3%;
  align-items: center;
  justify-content: center;
`;
const EmerjImage = styled.Image`
  width: 43%;
  height: 79%;
  margin-right: 45%;
`;

export default function EmerjLogo(props: any) {
  return (
    <ImageContainer>
      <EmerjImage
        source={require("../../../assets/images/logo_emerj_principal.png")}
      />
    </ImageContainer>
  );
}

