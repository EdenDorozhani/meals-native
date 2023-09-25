import { Image, StyleSheet, View } from "react-native";

import MealDescription from "../MealDescription/MealDescription";
import DetailsList from "../DetailsList";

const MealsDetails = ({ meal }) => {
  return (
    <View style={styles.detailsContainer}>
      <Image
        source={{ uri: meal.imageUrl }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.content}>
        <MealDescription
          title={meal.title}
          affordability={meal.affordability}
          complexity={meal.complexity}
          duration={meal.duration}
        />
        <DetailsList details={meal.ingredients} listTitle={"Ingredients"} />
        <DetailsList details={meal.steps} listTitle={"Steps"} />
      </View>
    </View>
  );
};

export default MealsDetails;

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 2,
  },
  image: {
    flex: 1,
  },
  content: {
    flex: 1,
    gap: 30,
    paddingBottom: 10,
  },
});
