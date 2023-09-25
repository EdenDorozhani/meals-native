import { MEALS } from "../assets/data/dummy-data";
import { useLayoutEffect } from "react";

import MealsOverviewList from "../components/MealsOverviewList.";

const MealsOverviewScreen = ({ route, navigation }) => {
  const id = route.params.categoryId;
  const name = route.params.categoryName;

  useLayoutEffect(() => {
    navigation.setOptions({
      ...screenHeaderOptions.categoriesScreen,
      title: name,
      contentStyle: { backgroundColor: "white" },
    });
  }, [navigation, name]);

  const onPressHandler = (id) => {
    navigation.navigate("MealsDetails", {
      categoryId: id,
    });
  };

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(id) >= 0
  );

  return <MealsOverviewList meals={displayedMeals} onPress={onPressHandler} />;
};

export default MealsOverviewScreen;
