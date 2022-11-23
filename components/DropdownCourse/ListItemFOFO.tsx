import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export const LIST_ITEM_HEIGHT = 150;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: "#f4f4f6",
    height: LIST_ITEM_HEIGHT,
  },
  name: {
    width:200,
    marginTop:5,
    marginBottom:7,
    marginLeft:60,
    fontSize: 16,
    fontWeight: "bold",
    color: "#343f4b",
  },
  ctn: {
    width:500,
    marginTop:-8,
    marginLeft:50,
    backgroundColor: "#c0ccda",
    borderTopWidth: 10,
    borderTopColor: "#1e2d3eee",
    borderBottomWidth: 10,
    borderBottomColor: "#b8977e",
    
  },
  component: {
    width:100,
    height:100,
   
   
    
    
  },
});
export interface ListItem {
  name: string;
  component: any;
}

interface ListItemProps {
  item: ListItem;
  isLast: boolean;
  isOpen: boolean;
  btnOnClick: () => void;
}

export default ({ item, isLast }: ListItemProps) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, {}]}>
    <View style={styles.ctn}>
      <Text style={styles.name}>{item.name}</Text>
    </View>

    <View style={styles.component}>{item.component}</View>
  </View>
  );
};
