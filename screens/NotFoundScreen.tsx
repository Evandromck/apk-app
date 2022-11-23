import { StyleSheet, TouchableOpacity } from 'react-native';
import styled from "styled-components/native";
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

const Imagem = styled.Image`
  width:41%;
  height:20%;
  margin-top:3%;

`

export default function NotFoundScreen({
  navigation,
}: RootStackScreenProps<"NotFound">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>A tela está em desenvolvimento!...</Text>
      <Imagem source={require("../assets/images/programacao.png")}/>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.link}
      >
         
        <Text style={styles.linkText}>Volte a Tela Principal!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 13,
    marginRight: 5,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
