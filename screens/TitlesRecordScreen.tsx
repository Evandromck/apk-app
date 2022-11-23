import React, { useState } from "react";
import {
  Text,
  StyleSheet,
} from "react-native";
import styled from "styled-components/native";
import CardAtividade from "../components/CardInserirAtividade";
import Header from "../components/Header";
import AppLogo from "../components/Header/Applogo";
import { useForm, Controller } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const BackgroundContainer = styled.View`
  height: 100%;
  width: 100%;
  margin-top: 8%;
  background: #1e2d3eee;
`;

const ImageBackground = styled.Image`
  height: 22%;
  width: 100%;
  margin-top: 2%;
  align-items: center;
  justify-content: center;
  z-index: 0;
  opacity: 0.3;
`;

const ContentItems = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: flex-end;
`;
const CursoItems = styled.View`
  width: 100%;
  height: 75%;
  padding-right: -10%;
`;

const IconsItems = styled.View`
  width: 100%;
  height: 80%;
  margin-left: -60%;
  margin-bottom: 54.4%;
`;
const ListItems = styled.View`
  width: 90%;
  height: 450px;
  margin-left: 6%;
  margin-top: -70%;
  background-color: #fff;
`;

const TitleCustom = styled.View`
  background: #fff;
  border-bottom-width: 10px;
  border-bottom-color: #b8977e;
  flex-direction: row;
  width: 100%;
  height: 20px;
  align-items: center;
`;
const SubTitleCustom = styled.View`
  background: #c0ccda;
  border-bottom-width: 10px;
  border-bottom-color: #b8977e;
  flex-direction: row;
  width: 100%;
  height: 50px;
  align-items: center;
  margin-top: 24%;
`;
const TextoCursos = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #333;
  padding-left: 5%;
  margin-top: 6px;
  color: #343f4b;
`;
const TextoCursos2 = styled.Text`
  width: 100%;
  height: 100%;
  font-size: 15px;
  font-weight: bold;
  color: #333;
  padding-top: 3%;
  padding-left: 5%;
  margin-top: 0px;
  color: #343f4b;
`;
const InputContainer = styled.View`
  margin-top: 30%;
  position: absolute;
`;

const Input = styled.TextInput`
  height: 50px;
  width: 320px;
  max-height: 50px;
  max-width: 320px;
  background-color: #e0e6ed;
  border: none;
  background: #fff;
  padding-left: 20px;
  margin-bottom: 1px;
  border-bottom-width: 1px;
  border-bottom-color: #c0ccda;
`;
const ContainerSubmitButton = styled.View`
  margin-top: 110%;
  padding-left: 60%;
  padding-right: 4%;
`;

const SubmitButton = styled.Button`
  width: 50x;
  height: 50px;
`;
const ConteinerHeader = styled.View`
  width: 100%;
  height: 20%;
  margin-top: -18%;
  margin-left: 0%;
`;
const ConteinerApp = styled.View`
  width: 100%;
  height: 20%;
  margin-top: -105%;
  margin-left: 67%;
`;

const schema = yup.object({
  titlename: yup.string().required("Informe o Diploma/Titulo"),
  institution: yup.string().required("Informe o Nome da Instituição"),

  resume: yup
    .string()
    .max(120, "O Resumo não pode conter mais que 120 caracteres")
    .min(1, "O Resumo não pode conter menos que 10 caracteres")
    .required("Informe o Resumo "),
});

export default function TitlesRecord({ route }: any) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleSignIn(data: Object) {
    console.log(data, "Tipo " + route.params.nome);
  }
  const [screen,setScreen] = useState('')
  return (
    <>
      <BackgroundContainer>
        <ConteinerHeader>
          <Header />
        </ConteinerHeader>

        <ImageBackground source={require("../assets/images/background.png")} />

        <ContentItems>
          <CursoItems>
            <ListItems>
              <TextoCursos>OUTROS DIPLOMAS E TÍTULOS</TextoCursos>
              <TitleCustom>
                <SubTitleCustom>
                  <TextoCursos2>{route.params.nome}</TextoCursos2>
                </SubTitleCustom>
              </TitleCustom>
              <InputContainer>
                <Controller
                  control={control}
                  name="type"
                  render={({ field: { value, onBlur, onChange } }) => (
                    <Input
                      style={[
                        styles.input,
                        {
                          display: "none",
                          borderWidth: errors.coursename && 1,
                          borderColor: errors.coursename && "#ff375b",
                        },
                      ]}
                      onBlur={onBlur}
                      defaultValue={route.params.nome}
                      secureTextEntry
                      onChangeText={(newScreen)=>setScreen(newScreen)}
                      value={value}
                    />
                  )}
                />

                <Controller
                  control={control}
                  name="titlename"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      style={[
                        styles.input,
                        {
                          borderWidth: errors.coursename && 1,
                          borderColor: errors.coursename && "#ff375b",
                        },
                      ]}
                      onChangeText={onChange}
                      onBlur={onBlur} // chamado quando o Input é tocado
                      value={value}
                      placeholder="Diploma/Titulo"
                    />
                  )}
                />
                {errors.titlename && (
                  <Text style={styles.labelError}>
                    {errors.titlename?.message}
                  </Text>
                )}

                <Controller
                  control={control}
                  name="institution"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      style={[
                        styles.input,
                        {
                          borderWidth: errors.institution && 1,
                          borderColor: errors.institution && "#ff375b",
                        },
                      ]}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      placeholder="Instituição"
                    />
                  )}
                />
                {errors.institution && (
                  <Text style={styles.labelError}>
                    {errors.institution?.message}
                  </Text>
                )}
                <Controller
                  control={control}
                  name="resume"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      style={[
                        styles.input,
                        {
                          borderWidth: errors.workload && 1,
                          borderColor: errors.workload && "#ff375b",
                        },
                      ]}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      placeholder="Resumo"
                    />
                  )}
                />
                {errors.resume && (
                  <Text style={styles.labelError}>
                    {errors.resume?.message}
                  </Text>
                )}
              </InputContainer>

              <ContainerSubmitButton>
                <SubmitButton
                  onPress={handleSubmit(handleSignIn)}
                  title="Registrar"
                  color="#B8977E"
                />
              </ContainerSubmitButton>
            </ListItems>
          </CursoItems>

          <IconsItems>
            <CardAtividade />
            <ConteinerApp>
              <AppLogo />
            </ConteinerApp>
          </IconsItems>
        </ContentItems>
      </BackgroundContainer>
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
