import { FlatList, StyleSheet } from "react-native";
import MealsOverviewItem from "../MealsOverviewItem";

const MealsOverviewList = ({ meals, onPress }) => {
  return (
    <FlatList
      data={meals}
      renderItem={({ item }) => (
        <MealsOverviewItem
          affordability={item.affordability}
          complexity={item.complexity}
          duration={item.duration}
          image={item.imageUrl}
          title={item.title}
          id={item.id}
          onPress={onPress}
        />
      )}
      contentContainerStyle={styles.list}
    />
  );
};

export default MealsOverviewList;

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 30,
    paddingVertical: 30,
    rowGap: 10,
  },
});
