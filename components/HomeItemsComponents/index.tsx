import React, { useState } from "react";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { FlatList, GestureResponderEvent, ImageProps } from "react-native";


import CardPerfilMagistrado from "../CardMagistrado";
import CardConsultaEnfam from "../CardConsultaEnfam";
import CardNotificacoes from "../../components/CardNotificacoes";
import { Link } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import AppLogo from "../Header/Applogo";

const BackgroundContainer = styled.SafeAreaView`
  flex: 1;
  background: #1e2d3eee;
  position: relative;
`;

const ImageBackground = styled.Image`
  flex: 1;
  position: absolute;
  height: 40%;
  width: 100%;
  opacity: 0.3;
`;

const ContentItems = styled.View`
  flex: 1;
  height: 81.9%;
  margin-left: 1%;
  margin-top: 18%;
  flex-direction: row;
  align-items: flex-end;
`;
const FlatListItems = styled.View`
  flex: 1;
  height: 74.6%;
  margin-left: -1%;
`;

const IconsItems = styled.View`
  width: 38%;
  height: 74.5%;

  margin-left: 2%;
`;

const FlatLinks = [
  {
    id: "0",
    text: "RELATÓRIO DE PONTOS",
    icon: require("../../assets/images/meusPontos.png"),
    screen: "PointsReport",
  },
  {
    id: "1",
    text: "CURSOS EMERJ",
    icon: require("../../assets/images/cursos.png"),
    screen: "Course",
  },
  {
    id: "2",
    text: "INSERIR ATIVIDADES",
    icon: require("../../assets/images/acoesEducacionais.png"),
    screen: "Activites",
  },
  {
    id: "3",
    text: "Virtual EMERJ",
    icon: require("../../assets/images/virtualEmerj.png"),
    screen: "NotFound",
  },
  {
    id: "4",
    text: "ATENDIMENTO",
    icon: require("../../assets/images/atendimento.png"),
    screen: "NotFound",
  },
];

const ImageFlat = styled.Image`
  width: 50px;
  height: 50px;
  margin-left: 5%;
  max-width: 60%;
  max-height: 70%;
`;

const TextFlat = styled.Text`
  height: 50px;
  position: relative;
  font-size: 12px;
  font-weight: bold;
  color: #333;
  padding-left: 5%;
  padding-left: 5%;
  margin-top: 2%;
  text-align: center;
`;

interface IFlatItems {
  id: string;
  text: string;
  icon: ImageProps["source"];
  screen: any;
}

const Item = ({
  //refatorar a const Item Link to modificando css da ImageFlat
  item,
  onPress,
}: {
  item: IFlatItems;
  onPress: (event: GestureResponderEvent) => void;
}) => (
  <Link style={styles.container} to={{ screen: item.screen }}>
    <ImageFlat source={item.icon} />
    <TextFlat> {item.text}</TextFlat>
  </Link>
);

export default function HomeItemsComponents({ props }: any) {
  const [nome, setNome] = useState("");
  const [lotacao, setLotacao] = useState("");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const getDados = async () => {
    try {
      const Dados = await AsyncStorage.getItem("Dados");
      if (Dados) {
        setNome(Dados);
      }
    } catch (error) {
      console.log("sem dados");
    }
  };
  const getLotacao = async () => {
    try {
      const lotacao = await AsyncStorage.getItem("Lotação");
      if (lotacao) {
        setLotacao(lotacao);
      }
    } catch (error) {
      console.log("sem dados");
    }
  };

  getDados();
  getLotacao();

  const renderItem = ({ item }: { item: IFlatItems }) => {
    return <Item item={item} onPress={() => setSelectedId(Number(item.id))} />;
  };

  return (
    <>
      <BackgroundContainer>
        <ImageBackground
          source={require("../../assets/images/background.png")}
        />
        <ContentItems>
          <FlatListItems>
            <FlatList
              data={FlatLinks}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              extraData={selectedId}
            ></FlatList>
          </FlatListItems>

          <IconsItems>

            <CardPerfilMagistrado nome={nome} lotacao={lotacao} />

            <CardConsultaEnfam />
            <CardNotificacoes />
          </IconsItems>
        </ContentItems>
      </BackgroundContainer>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 230,
    height: 90,
    marginLeft: 4,
    paddingLeft: 8,
    backgroundColor: "#c0ccda",
    borderBottomColor: "#b8977e",
    borderBottomWidth: 10,
  },
});
