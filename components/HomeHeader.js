import { View, Text, StyleSheet } from "react-native";

import { COLORS, FONTS, SIZES } from "../constants";

const HomeHeader = () => {
  return (
    <View style={styles.headerSettings}>
      <Text style={styles.headerTitle}>Suggested for you</Text>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  headerSettings: {
    padding: SIZES.font,
    backgroundColor: COLORS.primary,
    // justifyContent: "center",
    // alignItems: "center",
  },
  headerTitle: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: SIZES.large,
  },
});
