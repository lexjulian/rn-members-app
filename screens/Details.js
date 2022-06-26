import { View, Text, Image, StyleSheet } from "react-native";

import { DetailContent, DetailsHeader, FocusedStatusBar } from "../components";
import { RectButton } from "../components/Button";
import { COLORS } from "../constants";

const Details = ({ route, navigation }) => {
  const { data } = route.params;
  return (
    <View>
      <DetailsHeader />
      <View style={styles.upper}>
        <Image
          source={{ uri: data.picture.large }}
          resizeMode="cover"
          style={styles.profImage}
        />
        <View style={styles.button}>
          <RectButton minWidth={120} />
        </View>
      </View>

      <DetailContent data={data} />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  screenSettings: {
    flex: 1,
  },
  button: {
    marginTop: -20,
  },
  image: {
    height: 250,
    width: "100%",
  },

  profImage: {
    top: -50,
    marginHorizontal: 10,
    height: 90,
    width: 90,
    borderRadius: 50,
    borderColor: "#fff",
    borderWidth: 4,
  },
  upper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 16,
  },
  name: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
