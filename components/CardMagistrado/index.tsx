import React, { useEffect } from "react";
import {
  StyleSheet,
  
  TouchableHighlight,
  TouchableOpacity,
 
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "../Themed";

import styled from "styled-components/native";
import { string } from "yup";

const Container = styled.View`
  background: #fff;
  height: 40%;
  margin-top: 20%;
`;
const Title = styled.View`
  background: #b8977e;
  height: 20%;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;
const TitleText = styled.Text`
  margin-left: 4%;
  font-weight: bold;
  color: white;
  text-align: center;
  font-size: 10px;
`;

const CardBanner = styled.Image`
  width: 100%;
  height: 60px;
`;

const NameText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  padding-top: 9%;
  margin-top: 5%;
  text-transform: capitalize;
`;


const NameLot = styled.Text`
  font-size: 9px;
  text-align: center;
  margin-top: 8%;
  text-transform: capitalize;

`;
export default function CardPerfilMagistrado(props: any) {
  const nome = props.nome.substring(1, props.nome.length - 1);


  const lotacao = props.lotacao.substring(1, props.lotacao.length - 1);


  // console.log(nome);
  console.log(lotacao);

  return (


    
    // <TouchableOpacity onPress={()=> navegacao()}>
    <Container>
      <Title>
        <TitleText>PERFIL DO MAGISTRADO</TitleText>
      </Title>


      <CardBanner source={require("../../assets/images/background.png")} />

      <NameText>Dr(a) {nome}</NameText>


      <NameLot>{lotacao}</NameLot>
    </Container>
    // </TouchableOpacity>
  );
}
