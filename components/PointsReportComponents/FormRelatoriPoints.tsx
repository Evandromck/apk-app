import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { Alert, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/Entypo";

const BackgroundContainer = styled.View`
  height: 100%;
  width: 100%;
  margin-top: 0%;
  background: black;
`;
const TextoCursosone = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #b8977e;
  padding-left: 20%;
  margin-top: 1px;
`;

const ControllerToobar = styled.View`
  padding-top: 8%;
  margin-left: 25%;
  position: absolute;
`;

const IconToobar = styled.View`
  padding-top: 6px;
  margin-left: 59%;
  position: absolute;
`;

const Textpointstoobar = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #8492a6;
  padding-left: 82%;
  margin-top: -18px;
`;

const TextoCursos = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #b8977e;
  padding-left: 1%;
  margin-top: 1px;
`;

const Textpoints = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #8492a6;
  padding-left: 59%;
  margin-top: -20px;
`;

const TextBoll = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #3c4858;
  padding-left: 13%;
  margin-top: 1px;
`;

const ControllerBoll = styled.View`
  padding-top: 44px;
  margin-left: 4%;
  position: absolute;
`;

const ControllerBollAtua = styled.View`
  padding-top: 315%;
  margin-left: 4%;
  position: absolute;
`;

const TextPointatua = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #8492a6;
  padding-left: 61%;
  margin-top: 38%;
  position: absolute;
`;

const TextPointaDip = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #8492a6;
  padding-left: 61%;
  margin-top: 50%;
  position: absolute;
`;

const TextPointaPra = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #8492a6;
  padding-left: 61%;
  margin-top: 61%;
  position: absolute;
`;

const TextPointaPub = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #8492a6;
  padding-left: 61%;
  margin-top: 71%;
  position: absolute;
`;

const TextPointTotal = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #8492a6;
  padding-left: 84%;
  margin-top: 26%;
  position: absolute;
`;

const ControllerBollDip = styled.View`
  padding-top: 410%;
  margin-left: 4%;
  position: absolute;
`;

const ControllerBollPrat = styled.View`
  padding-top: 500%;
  margin-left: 4.3%;
  position: absolute;
`;

const ControllerBollPub = styled.View`
  padding-top: 619%;
  margin-left: 5.5%;
  position: absolute;
`;

const ControllerBollPubli = styled.View`
  padding-top: 224px;
  margin-left: 16px;
  position: absolute;
`;

const TextoCursostwo = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #b8977e;
  padding-left: 11%;
  margin-top: 1px;
`;
const TextoCursosthree = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #b8977e;
  padding-left: 8%;
  margin-top: 1px;
`;

const TextoCursosfour = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #b8977e;
  padding-left: 12%;
  margin-top: 45px;
`;

const IconToobarfour = styled.View`
  padding-left: 62%;
  margin-top: 75%;
  position: absolute;
`;

const TextpointFour = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #b8977e;
  padding-left: 74%;
  margin-top: 90.3%;
  position: absolute;
`;

const ContainerSubmitButton = styled.View`
  margin-top: 110%;
  padding-left: 10%;
  padding-right: 4%;
  position: absolute;
`;

const SubmitButton = styled.Button`
  width: 50x;
  height: 50px;
`;

type posts = {
  points_total_cur: Number;
  points_curso_ofi: Number;
  points_total_fre: Number;
  author: String;
};

export default function FormRelatoriPoints() {
  const [repositories, setRepositories] = useState<posts[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data);
      })
      .catch(() => {
        Alert.alert("Erro", "Não foi possível carregar os dados");
      });
  }, []);

  return (
    <>
      {repositories.map((repo) => {
        return (
          <BackgroundContainer>
            <TextoCursosone>Total de frequência com</TextoCursosone>
            <TextoCursos>aproveitamento em cursos oficiais</TextoCursos>
            <ControllerToobar>
              <IconToobar>
                <Icon name="minus" size={22} color="#273444" />
              </IconToobar>
              <Textpointstoobar>{repo.points_total_cur}</Textpointstoobar>
            </ControllerToobar>
            <ControllerBoll>
              <Icon name="controller-record" size={25} color="#273444" />
              <Textpoints>{repo.points_curso_ofi}</Textpoints>
            </ControllerBoll>
            <TextBoll>Cursos</TextBoll>
            <TextBoll>Oficiais</TextBoll>

            <TextoCursostwo>Total de frequência em ações</TextoCursostwo>
            <TextoCursosthree>educacionais não credenciadas</TextoCursosthree>
            <TextPointTotal>{repo.points_total_fre}</TextPointTotal>

            <ControllerBollAtua>
              <Icon name="controller-record" size={25} color="#79899F" />
            </ControllerBollAtua>
            <TextBoll>Atuação como</TextBoll>
            <TextBoll>Docente</TextBoll>
            <TextPointatua>pts</TextPointatua>

            <ControllerBollDip>
              <Icon name="controller-record" size={25} color="#C0CCDA" />
            </ControllerBollDip>
            <TextBoll>Diplomas e</TextBoll>
            <TextBoll>Títulos</TextBoll>
            <TextPointaDip>__ __ pts</TextPointaDip>

            <ControllerBollPrat>
              <Icon name="controller-record" size={25} color="#D3DCE6" />
            </ControllerBollPrat>
            <TextBoll>Prática</TextBoll>
            <TextBoll>Jurisdicional</TextBoll>
            <TextPointaPra>__ __ pts</TextPointaPra>

            <ControllerBollPubli>
              <Icon name="controller-record" size={22} color="#F5F7FA" />
            </ControllerBollPubli>

            <ControllerBollPub>
              <Icon name="circle" size={19} color="#D3DCE6" />
            </ControllerBollPub>

            <TextBoll>Publicações</TextBoll>
            <TextPointaPub>__ __ pts</TextPointaPub>

            <TextoCursosfour>Total de pontos =</TextoCursosfour>
            <IconToobarfour>
              <Icon name="circular-graph" size={120} color="#79899F" />
            </IconToobarfour>
            <TextpointFour>__ __ pts</TextpointFour>
          </BackgroundContainer>
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
  input: {},
  labelError: {
    alignSelf: "flex-start",
    color: "#ff375b",
    marginBottom: 8,
  },
});
