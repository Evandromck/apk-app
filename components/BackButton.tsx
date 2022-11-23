import React, { useState } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ImageBack = styled.Image`
  position: absolute;

  width: 5px;
  height: 5px;
  display: flex;
  justify-content: center;
  margin-top: 23%;

  margin-left: 25%;
`;
const ContainerBack = styled.View`
  position: relative;
  width: 100px;
  height: 66px;
  margin-top: 0%;
  margin-left: 0%;
`;
const Container = styled.View`
  position:relative;
  width:15%
  height:14%;
  margin-top: 10%;
  margin-left:3.4 %;

  

`;

export default function BackButton() {
  const navigation = useNavigation();
  const voltar = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <TouchableOpacity onPress={() => voltar()}>
        <ContainerBack>
          <ImageBack source={require("../assets/images/volta.png")} />
        </ContainerBack>
      </TouchableOpacity>
    </Container>
  );
}
