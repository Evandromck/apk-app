import React from "react";
import styled from "styled-components/native";
import BackButton from "../BackButton";

const Container = styled.View`
  flex: 1;
  z-index: 4;
  max-height: 11%;
  align-items: center;
  background: #c0ccda;
`;

const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  margin-top: 3%;
  margin-right: 30%;
  max-width: 80%;
  max-height: 80%;
`;

const TextOne = styled.Text`
  flex: 1;
  font-size: 17px;
  text-align: center;
  font-weight: bold;
  margin-top: -8%;
  margin-left: 10%;
  padding-top: 0%;
`;

const HomeTop = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  margin-top: -9%;
  margin-left: -1%;
`;

export default function CardPoints() {
  return (
    <Container>
      <Avatar source={require("../../assets/images/meusPontos.png")} />
      <TextOne>PONTOS</TextOne>
      <HomeTop>
        <BackButton />
      </HomeTop>
    </Container>
  );
}
