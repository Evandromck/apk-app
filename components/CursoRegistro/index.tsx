import React, { useState } from "react";
import styled from "styled-components/native";
import CardAtividade from "../CardInserirAtividade";

const BackgroundContainer = styled.View`
  height: 100%;
  width: 100%;
  background: #1e2d3eee;
  position: absolute;
`;

const ImageBackground = styled.Image`
  height: 24%;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 0;
  opacity: 0.3;
`;

const IconsItems = styled.View`
  position: absolute;
  width: 100%;
  height: 575px;
  margin-left: -68%;
`;

const ContentForm = styled.View`
  position: absolute;
  width: 89%;
  height: 75%;
  margin-top: 32%;
  margin-left: 5%;
  background: #ffffff;
`;

const ContainerTitulo = styled.View`
  width: 100%;
  height: 7%;
  background: #ffffff;
`;

const Titulo = styled.Text`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin-top: 2%;
  margin-right: 65%;
`;

const ContainerCurso = styled.View`
  width: 100%;
  height:10%
  background: #c0ccda;
  border-top-width: 10px;
  border-top-color: #b8977e;
  border-bottom-width: 10px;
  border-bottom-color: #b8977e;
  margin-top: 1%;

`;

const Curso = styled.Text`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin-top: 1%;
  margin-right: 15%;
`;

export default function CursoRegistroComponents() {
  return (
    <>
      <BackgroundContainer>
        <ImageBackground
          source={require("../../assets/images/background.png")}
        />

        <CardAtividade />

        <ContentForm>
          <ContainerTitulo>
            <Titulo>CURSO</Titulo>
          </ContainerTitulo>

          <ContainerCurso>
            <Curso>CREDENCIADO PELA ENFAM</Curso>
          </ContainerCurso>
        </ContentForm>
      </BackgroundContainer>
    </>
  );
}
