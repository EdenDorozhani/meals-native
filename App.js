import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealsDetailsScreen from "./screens/MealsDetailsScreen";
import { StatusBar } from "expo-status-bar";
import FavoriteContextProvider from "./store/favorite-context";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <FavoriteContextProvider>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Categories" component={CategoriesScreen} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealsDetails" component={MealsDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoriteContextProvider>
  );
}
