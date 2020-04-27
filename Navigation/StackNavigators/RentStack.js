import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// import CategoryList from "../../Components/CategoryList";
// import CategoryDetail from "../../Components/CategoryDetail";
import Detail from "../../Components/ProductDetail/ProductDetail";

// Screens
import { CATEGORIES, CATEGORY, PRODUCT } from "../screenNames";

// Config
import screenOptions from "../screenOptions";

const { Navigator, Screen } = createStackNavigator();

export default function ShopStack() {
  return (
    <Navigator initialRouteName={PRODUCT} screenOptions={screenOptions}>
      {/* <Screen name={CATEGORIES} component={CategoryList} /> */}
      {/* <Screen
        name={CATEGORY}
        component={CategoryDetail}
        options={({ route }) => ({ title: route.params.category.title })}
      /> */}
      <Screen
        name={PRODUCT}
        component={Detail}
        // options={({ route }) => ({ title: route.params.product.name })}
      />
    </Navigator>
  );
}
