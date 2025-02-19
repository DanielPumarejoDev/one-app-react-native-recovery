import { Pressable, StyleSheet, Text, View } from "react-native";
import { CustomIconBtn } from "./CustomIconBtn";
import { stylesOth } from "../styles";

interface Props {
  text: string;
  iconName: any;
  onPress?: () => void;
}

export function ListNavigation({ iconName, text, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
        },
        stylesOth.listWrapper,
      ]}
    >
      <View style={stylesOth.listNavigation}>
        <CustomIconBtn name={iconName} />
        <Text style={stylesOth.textMedium}>{text}</Text>
      </View>
    </Pressable>
  );
}
