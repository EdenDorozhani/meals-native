import { useLayoutEffect } from "react";
import { MEALS } from "../assets/data/dummy-data";
import MealsDetails from "../components/MealsDetails/MealsDetails";
import screenHeaderOptions from "../screenHeaderOptions";
import IconButton from "../components/IconButton";
import { useContext } from "react";
import { FavoriteContext } from "../store/favorite-context";

const MealsDetailsScreen = ({ route, navigation }) => {
  const favoriteCtx = useContext(FavoriteContext);

  const id = route.params.categoryId;
  const meal = MEALS.find((meal) => meal.id == id);

  const favoriteMeal = favoriteCtx.ids.includes(id);

  const onPressHandler = () => {
    if (!favoriteMeal) {
      favoriteCtx.onAddFavorites(id);
    } else {
      favoriteCtx.onRemoveFavorites(id);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      ...screenHeaderOptions.categoriesScreen,
      title: "About the Meal",
      headerRight: () => (
        <IconButton
          name={favoriteMeal ? "star" : "star-o"}
          color="white"
          size={20}
          onPress={onPressHandler}
        />
      ),
    });
  }, [navigation, favoriteMeal]);

  return <MealsDetails meal={meal} />;
};

export default MealsDetailsScreen;
