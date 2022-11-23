import { useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Text,
  Pressable,
} from "react-native";

export default function Register() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalActive}
        onRequestClose={() => setModalActive(false)}
      >
        <View style={styles.outerView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Teste</Text>
            <Pressable onPress={() => setModalActive(false)}>
              <Text style={{ color: "red" }}>Fechar Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        onPress={() => setModalActive(true)}
        style={{ backgroundColor: "blue", padding: 16, borderRadius: 8 }}
      >
        <Text>Mostrar Modal</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  outerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#rgba(0,0,0,0.2)",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 30,
    padding: 35,
    width: 200,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
