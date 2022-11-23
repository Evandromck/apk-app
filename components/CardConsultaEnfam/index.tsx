import React from "react";
import { Text } from "../Themed";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

const Containerr = styled.View`
  background: #fff;
  margin-top: 20px;
`;
const Title = styled.View`
  background: #b8977e;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;
const TitleText = styled.Text`
  font-weight: bold;
  color: white;
  text-align: center;
  font-size: 12px;
`;
const Avatarr = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  position: absolute;
  margin-top: -25px;
`;

const AvatarContainerr = styled.View`
  position: relative;
  width: 100%;
  align-items: center;
  margin-bottom: 30px;
`;
export default function CardConsultaEnfam() {
  return (
    <TouchableOpacity>
    <Containerr>
      <Title>
        <TitleText>.</TitleText>
      </Title>

      <AvatarContainerr>
        <Avatarr source={require("../../assets/images/regras.jpg")} />
      </AvatarContainerr>

      <Text
        style={{
          fontSize: 12,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 25,
        }}
      >
        CONSULTE AS REGRAS DA ENFAM
      </Text>
    </Containerr>
    </TouchableOpacity>
  );
}
