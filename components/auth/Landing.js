import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Landing({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#6750A4" }}>
      <View style={styles.container}>
        <View style={{ width: "80%", margin: 10 }}>
          <TouchableOpacity style={styles.buttonLogin} title="Login" onPress={() => navigation.navigate("Login")}>
            <Text style={styles.textLogin}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: "80%", margin: 10 }}>
          <TouchableOpacity style={styles.buttonRegister} title="Register" onPress={() => navigation.navigate("Register")}>
            <Text style={styles.textRegister}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 80,
    alignItems: "center",
  },
  buttonRegister: {
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    elevation: 12,
    backgroundColor: "#F4EFF4",
  },
  buttonLogin: {
    backgroundColor: "#9A82DB",
    alignItems: "center",
    padding: 10,
    borderWidth: 0,
    borderRadius: 10,
    elevation: 1,
  },
  textRegister: {
    color: "black",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  textLogin: {
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
});
