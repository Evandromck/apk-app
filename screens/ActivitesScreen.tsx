import React from "react";
import styled from "styled-components/native";
import { RootTabScreenProps } from "../types";
import InserirTitulosComponents from "../components/InserirTitulosComponents";
import { useContext } from "react";
import { InputValueContext } from "../context/InputValueContext";
import Header from "../components/Header";

export default function Activites({
  navigation,
}: RootTabScreenProps<"Activites">) {
  const { state, dispatch } = useContext(InputValueContext);

  const Container = styled.View`
    flex: 1;
    border-bottom-width: 10px;
    border-bottom-color: #b8977e;
    background: #1e2d3eee;
  `;

  return (
    <Container>
      <InserirTitulosComponents />
    </Container>
  );
}
