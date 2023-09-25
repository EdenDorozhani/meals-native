import CategoriesList from "../components/CategoriesList";
import { CATEGORIES } from "../assets/data/dummy-data";
import { useLayoutEffect } from "react";
import screenHeaderOptions from "../screenHeaderOptions";
import IconButton from "../components/IconButton";

const CategoriesScreen = ({ navigation }) => {
  const navigateToMealsOverview = (id, name) => {
    navigation.navigate("MealsOverview", {
      categoryId: id,
      categoryName: name,
    });
  };

  const openSideBar = () => {};

  useLayoutEffect(() => {
    navigation.setOptions({
      ...screenHeaderOptions.categoriesScreen,
      headerLeft: () => (
        <IconButton name="bars" color="white" size={20} onPress={openSideBar} />
      ),
    });
  }, []);

  return (
    <CategoriesList categories={CATEGORIES} onPress={navigateToMealsOverview} />
  );
};
export default CategoriesScreen;
