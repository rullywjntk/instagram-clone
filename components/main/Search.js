import firebase from "firebase/compat/app";
import React, { useState } from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
require("firebase/compat/firestore");

export default function Search(props) {
  const [users, setUsers] = useState([]);
  const fetchUsers = (search) => {
    firebase
      .firestore()
      .collection("users")
      .where("name", ">=", search)
      .get()
      .then((snapshot) => {
        let users = snapshot.docs.map((doc) => {
          const data = doc.data();
          const id = doc.id;
          return { id, ...data };
        });
        setUsers(users);
      });
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Search</Text>
      <View>
        <TextInput placeholder="Search..." onChangeText={(search) => fetchUsers(search)} />
        <FlatList
          numColumns={1}
          horizontal={false}
          data={users}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => props.navigation.navigate("Profile", { uid: item.id })}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
