import React from "react";
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const LIST_ITEM_HEIGHT = 54;
const styles = StyleSheet.create({
  container: {
    backgroundColor:"#E0E6ED",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: "#f4f4f6",
    height: LIST_ITEM_HEIGHT,
  },
  name: {
    fontSize: 16,
    fontFamily:"Roboto",
    fontWeight: "bold",
    color:"#3C4858",
  },
});

export interface ListItem {
  name: string;
  screen: any;
}

interface ListItemProps {
  item: ListItem;
  isLast: boolean;
  isOpen: boolean;
  btnOnClick: () => void;
}

export default ({ item, isLast }: ListItemProps) => {
  const navigation = useNavigation();
  const tela = () => {
    navigation.navigate(item.screen, { nome: item.name });
  };
  return (
    <TouchableHighlight onPress={() => tela()}>
       <View style={[styles.container, {}]}>      
        <Text style={styles.name}>{item.name}</Text>      
    </View>
    </TouchableHighlight>
  );
};
