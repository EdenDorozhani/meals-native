import { StyleSheet, Text, Pressable } from "react-native";

const CategoryItem = ({ color, text, onPress, id }) => {
  return (
    <Pressable
      android_ripple={{ color: "black" }}
      style={[styles.itemContainer, { backgroundColor: color }]}
      onPress={() => onPress(id, text)}
    >
      <Text style={styles.itemContent}>{text}</Text>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    borderRadius: 10,
    margin: 16,
  },
  itemContent: { color: "black", fontWeight: "700" },
});
