import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text,TouchableOpacity, View } from "react-native";
import Item, { ListItem } from "./ListItemAcoes";

const bit = (b: boolean) => (b ? 1 : 0);
const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    padding: 4,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 10,
    borderBottomColor: "#B8977E",
    flexDirection: "row",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color:"#343F4B",
  },
  items: {
    overflow: "hidden",
  },
});

interface ListProps {
  list: List;
  /*list2: List2;*/
}

export interface List {
  name: string;
  items: ListItem[];
}
export interface List2 {
  name: string;
  items: ListItem[];
}

export default ({ list, /*list2*/ }: ListProps) => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const height = open ? "auto" : open2 ? "auto" : 0;
  const [currentIdx, setCurrentIdx] = useState(0);

  const btnOnClick = (idx: number) => {
    setCurrentIdx((currentValue) => (currentValue !== idx ? idx : 1));
  };

  return (
    <>
      <TouchableOpacity onPress={() => setOpen((open) => !open)}>
        <View style={[styles.container]}>
          <Text style={styles.title}>AÇÕES EDUCACIONAIS</Text>
        </View>
      </TouchableOpacity>
      <View style={[styles.items, { height }]}>
        {list.items.map((item, idx) => (
          <Item
            key={idx}
            item={item}
            isOpen={idx === currentIdx}
            isLast={idx === list.items.length - 1}
            btnOnClick={() => btnOnClick(idx)}
          />
        ))}
      </View>

     {/*} <TouchableWithoutFeedback onPress={() => setOpen2((open2) => !open2)}>
        <View style={[styles.container]}>
          <Text style={styles.title}>DIPLOMAS E TITULOS</Text>
        </View>
      </TouchableWithoutFeedback>

      <View style={[styles.items, { height }]}>
        {list2.items.map((item, idx) => (
          <Item
            key={idx}
            item={item}
            isOpen={idx === currentIdx}
            isLast={idx === list.items.length - 1}
            btnOnClick={() => btnOnClick(idx)}
          />
        ))}
        </View>*/}
    </>
  );
};
