import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ width: "100%" }}>
        <View style={styles.header}>
          <Text style={styles.carlos}>Bem vindo, Carlos</Text>
          <View style={styles.descricao1}>
            <Text style={{ color: "#fff" }}>Você gastou hoje</Text>
            <Text style={{ fontSize: 30, color: "#fff" }}>R$ 500</Text>
          </View>

          <View style={styles.descricao2}>
            <Text style={{ color: "#fff", marginBottom: 6 }}>
              ESCOLHER PERÍODO:
            </Text>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-evenly",
              }}
            >
              <Text style={styles.text}>Hoje</Text>
              <Text style={styles.text}>Essa Semana</Text>
              <Text style={styles.text}>Esse Mês</Text>
            </View>
          </View>
        </View>

        <View style={styles.btn}>

          <Button
            style={{ backgroundColor: "#444140" }}
            icon={{ name: "flight", color: "#fff" }}
          ></Button>

          <Button
            style={{ backgroundColor: "#444140" }}
            icon={{ name: "home", color: "#fff" }}
          ></Button>

          <Button
            style={{ backgroundColor: "#444140" }}
            icon={{ name: "local-dining", color: "#fff" }}
          ></Button>

          <Button
            style={{ backgroundColor: "#444140" }}
            icon={{ name: "directions-car", color: "#fff" }}
          ></Button>

          <Button
            style={{ backgroundColor: "#444140" }}
            icon={{ name: "build", color: "#fff" }}
          ></Button>
        </View>

        <View style={styles.text1}>
          <Text>Pizza(R$ 30)</Text>
          <Text>20/01/2020</Text>
        </View>

        <View style={styles.text1}>
          <Text>Coca-Cola(R$ 10)</Text>
          <Text>20/01/2020</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 300 // a gambs que fiz pra ficar responsivo no celular
  },

  btn: {
    flexDirection: "row",
    padding: 15,
    width: "100%",
    justifyContent: "space-between"
  },

  text1: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 10,
    backgroundColor: "#fff",
  },

  header: {
    width: "100%",
    height: 300,
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
    paddingTop: 25,
    backgroundColor: "#E54B4B",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },

  carlos: {
    color: "#fff",
    fontSize: 25,
  },

  descricao1: {
    alignItems: "center",
    justifyContent: "center",
  },

  descricao2: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 18,
    width: "100%",
  },

  text: {
    color: "#fff",
  }
});
