import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

import { RectButton } from "./Button";

const UserList = ({ data }) => {
  const navigation = useNavigation();

  function pressHandler() {
    navigation.navigate("Details", { data });
  }

  return (
    <View style={styles.userContainer}>
      <Pressable
        style={{ flex: 1 }}
        android_ripple={{ color: "#ccc" }}
        onPress={pressHandler}
      >
        <View style={styles.innerContainer}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={{ uri: data.picture.large }}
              resizeMode="cover"
              style={styles.imageContainer}
            />
            <View style={styles.userDetails}>
              <Text
                style={styles.name}
              >{`${data.name.first} ${data.name.last}`}</Text>
              <Text style={styles.username}>@{data.login.username} </Text>
            </View>
          </View>

          <RectButton minWidth={100} fontSize={SIZES.font} />
        </View>
      </Pressable>
    </View>
  );
};

export default UserList;

const styles = StyleSheet.create({
  userContainer: {
    backgroundColor: COLORS.white,
  },
  innerContainer: {
    padding: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  userDetails: {
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  name: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.font,
  },
  username: {
    marginTop: -5,
    color: COLORS.gray,
    fontSize: SIZES.small,
  },
});
