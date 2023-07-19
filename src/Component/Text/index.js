import React from "react";
import { Text } from "react-native";
import { styles } from "./styles";
import { withTheme } from "../../Theme";
const TextComponent = ({ theme, title, onPress, customStyle = {} }) => {
  return (
      <Text style={[styles.text, customStyle]} onPress={onPress}>
        {title}
      </Text>
  );
};

export default withTheme(TextComponent);
