import React from "react";
import { StyleSheet, View,ScrollView  } from "react-native";
import List, { List as ListModel } from "./ListAcoes";
import List2, { List2 as ListModel2 } from "./ListDiplomasTitles";
import List3, { List3 as ListModel3 } from "./ListDocencia";

const list: ListModel = {
  name: "Ações Educacionais",
  items: [
    { name: "CURSOS OFICIAIS REALIZADOS", screen: "ActionRecord" },
    { name: "CURSO CREDENCIADOS PELO ENFAM", screen: "ActionRecord" },
  ],
};

const list2: ListModel2 = {
  name: "Diplomas e Titulos",
  items: [
    { name: "DIPLOMA DE ESPECIALIZAÇÃO", screen: "TitlesRecord" },
    { name: "DIPLOMA DE ESPECIALIZAÇÃO ENFAM ", screen: "TitlesRecord" },
    { name: "DIPLOMA DE MESTRADO", screen: "TitlesRecord" },
    { name: "DIPLOMA DE MESTRADO PROFISSIONAL", screen: "TitlesRecord" },
    { name: "DIPLOMA DE DOUTORADO", screen: "TitlesRecord" },
    { name: "DIPLOMA DE PÓS DOUTORADO", screen: "TitlesRecord" },
  ],
};

const list3: ListModel3 = {
  name: "Atuação na Doçência",
  items: [
    { name: "PRÁTICA JURISDICIONAL", screen: "Publication" },
    { name: "PUBLICAÇÕES", screen: "Publication" },
    { name: "DOCÊNCIA COM FOFO", screen: "Publication" },
    { name: "DOCÊNCIA COM OU SEM FOFO", screen: "Publication" },
  ],
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#343F4B",
    padding: 9,
    marginTop: -70,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
});

export default () => {
  return (
    <View style={styles.container}>
      <ScrollView style={{}}>
        <List {...{ list /*list2*/ }} />
        <List2 {...{ list2 }} />
        <List3 {...{ list3 }} />
      </ScrollView>
    </View>
  );
};
