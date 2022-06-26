import { View, StyleSheet } from "react-native";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";

const DetailsHeader = (navigation) => {
  return (
    <View style={styles.background}>
      <View>
        <AntDesign name="arrowleft" size={24} color="white" />
      </View>

      <View style={styles.navRight}>
        <Ionicons
          name="search-outline"
          size={24}
          color="white"
          style={{ marginRight: 20 }}
        />
        <Entypo name="dots-three-vertical" size={24} color="white" />
      </View>
    </View>
  );
};

export default DetailsHeader;

const styles = StyleSheet.create({
  background: {
    height: 120,
    backgroundColor: "#000",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  navRight: {
    flexDirection: "row",
  },
});
