import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import MealDescription from "../MealDescription/MealDescription";

const MealsOverviewItem = ({
  affordability,
  complexity,
  duration,
  image,
  title,
  onPress,
  id,
}) => {
  return (
    <Pressable
      onPress={() => {
        onPress(id);
      }}
      android_ripple={{ color: "#DDDDDD", foreground: true }}
      style={styles.itemContainer}
    >
      <Image source={{ uri: image }} style={styles.image} />
      <MealDescription
        title={title}
        affordability={affordability}
        complexity={complexity}
        duration={duration}
      />
    </Pressable>
  );
};

export default MealsOverviewItem;

const styles = StyleSheet.create({
  itemContainer: {
    gap: 10,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "black",
    paddingBottom: 15,
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
