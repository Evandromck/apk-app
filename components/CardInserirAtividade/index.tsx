import React from "react";
import styled from "styled-components/native";
import BackButton from "../BackButton";

const Container = styled.View`
  flex: 1;
  z-index: 4;
  max-height: 12%;
  align-items: center;
  justify-content: center;
  background: #c0ccda;
`;

const BackContainer = styled.View`
  flex: 1;
  margin-top: -19%;
  margin-right: 68%;
`;
const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  margin-top: 5%;
  margin-right: 30%;
  max-width: 80%;
  max-height: 80%;
`;

const TextOne = styled.Text`
  font-size: 15px;
  text-align: center;
  font-weight: bold;
  margin-top: -12%;
  margin-left: 10%;
  padding-top: 0%;
`;
const TextTwo = styled.Text`
  font-size: 15px;
  text-align: center;
  font-weight: bold;
  margin-top: 0%;
  margin-left: 10%;
  padding-top: 0%;
`;
export default function CardAtividade() {
  return (
    <Container>
      <Avatar source={require("../../assets/images/inserirTitulos.png")} />

      <TextOne>INSERIR</TextOne>
      <TextTwo>ATIVIDADES</TextTwo>

      <BackContainer>
        <BackButton />
      </BackContainer>
    </Container>
  );
}
