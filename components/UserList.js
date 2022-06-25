import { View, Text, Pressable, StyleSheet } from "react-native";

const UserList = ({ first, last, gender, id }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Pressable>
        <Text>Name: {`${first} ${last}`}</Text>
        <Text>Gender: {gender} </Text>
        <Text>ID: {id} </Text>
      </Pressable>
    </View>
  );
};

export default UserList;
