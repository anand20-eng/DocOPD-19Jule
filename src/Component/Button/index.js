import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { withTheme } from '../../Theme'

const ButtonComponent = ({ primaryButton, title, onPress, theme }) => {
  let parentStyle = styles.secondaryButton(theme);
  let textStyle = styles.secondaryText(theme);
  if (primaryButton) {
    parentStyle = styles.primaryButton(theme);
    textStyle = styles.primaryText(theme);
  }

  return (
    <View>
      <TouchableOpacity onPress={onPress} style={parentStyle}>
        <Text style={textStyle}>{title}</Text>
      </TouchableOpacity>
    </View>

  );
};

export default withTheme(ButtonComponent);
