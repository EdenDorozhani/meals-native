import { StyleSheet, Text, View } from "react-native";

const MealDescription = ({ title, duration, complexity, affordability }) => {
  return (
    <View style={styles.descriptionContainer}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.itemInfo}>
        <Text style={styles.info}>{duration}m</Text>
        <Text style={styles.info}>{complexity.toUpperCase()}</Text>
        <Text style={styles.info}>{affordability.toUpperCase()}</Text>
      </View>
    </View>
  );
};

export default MealDescription;

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    fontWeight: "700",
    color: "white",
  },
  itemInfo: { flexDirection: "row", gap: 10 },
  info: {
    color: "white",
  },
  descriptionContainer: {
    alignItems: "center",
  },
});
