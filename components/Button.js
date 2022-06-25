import { View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS, SIZES, FONTS, SHADOWS } from "../constants";

export const RectButton = ({ minWidth, fontSize, handlePress }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        height: 45,
        padding: SIZES.small,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Follow
      </Text>
    </TouchableOpacity>
  );
};
