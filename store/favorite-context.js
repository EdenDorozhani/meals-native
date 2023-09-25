import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  ids: [],
  onAddFavorites: (id) => {},
  onRemoveFavorites: (id) => {},
});

const FavoriteContextProvider = ({ children }) => {
  const [favoriteMealsIds, setFavoriteMealsIds] = useState([]);

  const onAddFavorites = (id) => {
    setFavoriteMealsIds((prevState) => [...prevState, id]);
  };

  const onRemoveFavorites = (id) => {
    setFavoriteMealsIds((prevState) =>
      prevState.filter((mealId) => mealId !== id)
    );
  };

  const value = {
    ids: favoriteMealsIds,
    onAddFavorites: onAddFavorites,
    onRemoveFavorites: onRemoveFavorites,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
