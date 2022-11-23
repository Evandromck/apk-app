import styled from "styled-components/native";
import { useContext, useEffect } from "react";
import { RootTabScreenProps } from "../types";
import HomeItemsComponents from "../components/HomeItemsComponents";
import { InputValueContext } from "../context/InputValueContext";
import { StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  flex: 1;
  margin-top: -8.4%;
  border-bottom-width: 10px;
  border-bottom-color: #b8977e;
`;

export default function HomeScreen(
  { navigation }: RootTabScreenProps<"Home">,

  { props }: any
) {
  const { state, dispatch } = useContext(InputValueContext);

  return (
    <Container>

      <HomeItemsComponents />
    </Container>
  );
}
