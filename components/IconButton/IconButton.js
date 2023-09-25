import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Pressable } from "react-native";

const IconButton = ({ name, color, size, onPress }) => {
  return (
    <Pressable onPress={() => onPress()}>
      <FontAwesome name={name} color={color} size={size} />
    </Pressable>
  );
};

export default IconButton;
