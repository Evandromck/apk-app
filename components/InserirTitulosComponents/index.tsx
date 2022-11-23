import React, { useState } from "react";
import styled from "styled-components/native";
import CardAtividade from "../CardInserirAtividade";
import Dropdown from "../Dropdown";

const BackgroundContainer = styled.View`
  height: 100%;
  width: 100%;
`;

const ImageBackground = styled.Image`
  height: 30%;
  width: 100%;
  margin-top: -0%;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 0;
  opacity: 0.3;
`;

const ContentItems = styled.View`
  flex: 2;
  margin-top: 31%;
  flex-direction: row;
  align-items: flex-end;
`;
const DropdownItems = styled.View`
  flex: 2;
`;

export default function InserirTitulosComponents() {
  return (
    <>
      <BackgroundContainer>
        <CardAtividade />
        <ImageBackground
          source={require("../../assets/images/background.png")}
        />
        <ContentItems>
          <DropdownItems>
            <Dropdown />
          </DropdownItems>
        </ContentItems>
      </BackgroundContainer>
    </>
  );
}
