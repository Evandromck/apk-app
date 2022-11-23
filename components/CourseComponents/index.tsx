import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import CardCourse from "../CardCourse";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, Text } from "react-native";

const BackgroundContainer = styled.SafeAreaView`
  flex: 1;
  background: #343f4b;
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
  max-width: 100%;
  max-height: 72%;
  margin-top: 21%;
  flex-direction: row;
  align-items: flex-end;
`;

export default function CourseComponents() {
  const [token, setToken] = useState("");
  const [curso, setCurso] = useState("");

  useEffect(() => {
    const getToken = async () => {
      try {
        const accessToken = await AsyncStorage.getItem("@accessToken");
        if (accessToken) {
          setToken(accessToken);
          acessarCursos(token);
          console.log(token);
        }
      } catch (error) {
        Alert.alert("Erro", "Não foi possível acessar o token");
      }
    };

    getToken();

    // const acessarCursos = () => {
    //   useEffect(() => {
    //     fetch(
    //       `https://wwwh3.tjrj.jus.br/HWEBAPIEVENTOS/api/evento/lista/28863720720`,
    //       {
    //         method: "GET",
    //         headers: { Authorization: `Bearer ${token}` },
    //       }
    //     )
    //       .then((response) => response.json())
    //       .then((data) => {
    //         setCurso(data);
    //         console.log(curso);
    //       })
    //       .catch(() => {
    //         Alert.alert("Erro", "Não foi possível carregar os dados");
    //       });
    //   });
    // };

    const acessarCursos = async (token: any) => {
      try {
        const lista = await axios.get(
          `https://wwwh3.tjrj.jus.br/HWEBAPIEVENTOS/api/evento/encontros/007397`,
          {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log(token);
        const list = lista.data[0].descricao;

        console.log(list);
      } catch (error) {
        Alert.alert("Erro", "Não foi possível acessar os cursos");
        console.log(error);
      }
    };
  });

  return (
    <>
      <BackgroundContainer>
        <CardCourse />
        <ImageBackground
          source={require("../../assets/images/background.png")}
        />
        <ContentItems></ContentItems>
      </BackgroundContainer>
    </>
  );
}
