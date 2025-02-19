import AntDesign from "@expo/vector-icons/AntDesign";
import { IconButton } from "react-native-paper";

interface Props {
  name: any;
  onPress?: () => void;
}

export function CustomIconBtn({ name, onPress }: Props) {
  return (
    <IconButton
      style={{ margin: 0 }}
      icon={() => (
        <AntDesign name={name} size={24} color="black" onPress={onPress} />
      )}
    />
  );
}
