import { FlatList, StyleSheet, View } from "react-native";
import CategoryItem from "../CategoryItem";

const CategoriesList = ({ categories, onPress }) => {
  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => (
        <CategoryItem
          color={item.color}
          text={item.title}
          onPress={onPress}
          id={item.id}
        />
      )}
      keyExtractor={({ id }) => id}
      numColumns={2}
    />
  );
};

export default CategoriesList;
