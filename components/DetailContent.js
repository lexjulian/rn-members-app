import { View, Text, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
const DetailContent = ({ data }) => {
  function getParsedDate(date) {
    date = String(date).split(" ");
    const days = String(date[0]).split("-");
    const hours = String(date[1]).split(":");
    const converted = [
      parseInt(days[0]),
      parseInt(days[1]) - 1,
      parseInt(days[2]),
    ];
    const year = converted.splice(0, 1);
    const month = converted.splice(0, 1).toString();
    if (month === "0") return `December ${year} `;
    if (month === "1") return `January ${year} `;
    if (month === "2") return `February ${year} `;
    if (month === "3") return `March ${year} `;
    if (month === "4") return `April ${year} `;
    if (month === "5") return `May ${year} `;
    if (month === "6") return `June ${year} `;
    if (month === "7") return `July ${year} `;
    if (month === "8") return `August ${year} `;
    if (month === "9") return `September ${year} `;
    if (month === "10") return `October ${year} `;
    if (month === "11") return `November ${year} `;

    return year, month;
  }
  //   const date = new Date(...getParsedDate('2016-01-04 10:34:23'));
  //   console.log(date);

  return (
    <View style={styles.screenSettings}>
      <Text style={styles.name}>{`${data.name.first}`}</Text>
      <Text style={styles.username}>@{data.login.username}</Text>
      <Text style={{ marginTop: 10 }}>
        I’m real🖥️, and I hope some of my followers are too.😃🐟
      </Text>
      <View style={styles.icons}>
        <View style={styles.text}>
          <EvilIcons name="location" size={24} color="black" />
          <Text style={{ fontSize: SIZES.font, marginLeft: -3 }}>
            {" "}
            {data.location.state}
          </Text>
        </View>
        <View style={styles.text}>
          <EvilIcons name="link" size={24} color="black" />
          <Text style={{ color: "blue", fontSize: SIZES.font, marginLeft: 3 }}>
            {data.email}
          </Text>
        </View>
        <View style={styles.text}>
          <Ionicons name="calendar-outline" size={20} color="black" />
          <Text style={{ fontSize: SIZES.font, marginLeft: 8 }}>
            {/* Joined {getParsedDate(data.registered.date).splice(0, 1)} */}
            Joined {getParsedDate(data.registered.date)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DetailContent;
const styles = StyleSheet.create({
  screenSettings: {
    marginTop: -40,
    marginHorizontal: SIZES.font,
  },
  name: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.extraLarge,
  },
  username: {
    marginTop: -10,
    color: COLORS.gray,
  },
  icons: {
    marginTop: 20,
  },
  text: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2,
  },
});
