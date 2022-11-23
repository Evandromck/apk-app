import React from "react";
import {
  IconButton,
  Center,
  VStack,
  NativeBaseProvider,
  Box,
} from "native-base";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

const HomeIcon = () => {
  return (
    <Center>
      <IconButton
        variant="solid"
        borderRadius="full"
        _icon={{
          as: MaterialIcons,
          name: "menu",
        }}
      />
    </Center>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="0.5" marginRight="50%">
        <HomeIcon />
      </Center>
    </NativeBaseProvider>
  );
};
