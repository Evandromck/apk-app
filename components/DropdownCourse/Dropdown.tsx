import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Concluded from "../CourseComponents/OficialCourseComponent/Concluded"
import WaintigConfirmation from "../CourseComponents/OficialCourseComponent/WaintigConfirmation"
import ConcludedFOFO from "../CourseComponents/FOFOComponent/Concluded"
import WaitigConfirmationFOFO from "../CourseComponents/FOFOComponent/WaitigConfirmation"
import OtherConcluded from "../CourseComponents/OtherCourseComponent/Concluded"
import OtherWaintigConfirmation from "../CourseComponents/OtherCourseComponent/WaintigConfirmation"
import List, { List as ListModel } from "./OficialCourse";
import List2, { List2 as ListModel2 } from "./FOFO";
import List3, { List3 as ListModel3 } from "./OtherCourse";

const list: ListModel = {
  name: "Cursos Oficiais",
  items: [
    { name: "Cursos Concluídos", component: <Concluded/> },
    { name: "Aguardando Confirmação", component: <WaintigConfirmation /> },
  ],
};

const list2: ListModel2 = {
  name: "FOFO",
  items: [
    { name: "Cursos Concluídos", component: <ConcludedFOFO/> },
    { name: "Aguardando Confirmação", component: <WaitigConfirmationFOFO/> },
  ],
};

const list3: ListModel3 = {
  name: "Outros Cursos",
  items: [
    { name: "Cursos Concluídos", component: <OtherConcluded/>  },
    { name: "Aguardando Confirmação", component: <OtherWaintigConfirmation/> },
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
