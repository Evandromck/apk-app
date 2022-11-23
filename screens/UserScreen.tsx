import { StyleSheet } from "react-native";
import UserInfo from "../components/UserInfo";
import { Text, View } from "../components/Themed";
import AsyncStorage from "@react-native-async-storage/async-storage";



export default function UserScreen({ props }: any ) {
  const nome = props.nome.substring(1, props.nome.length - 1);
  const lotacao = props.lotacao.substring(1, props.lotacao.length - 1);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

    
      
      <UserInfo path="/screens/UserScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});