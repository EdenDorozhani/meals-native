import { StyleSheet, Text, View } from "react-native";

const DetailItem = ({ text }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{text}</Text>
    </View>
  );
};

export default DetailItem;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 7,
  },
  itemText: {},
});
