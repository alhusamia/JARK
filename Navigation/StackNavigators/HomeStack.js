import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../../Components/AllProducts";
import SearchButton from "../../Components/Search/SearchButton";
import ProductDetail from "../../Components/ProductDetail/ProductDetail";
import OwnerProfile from "../../Components/OwnerProfile";

// Screens
import { MAIN, PRODUCT_DETAIL, OWNERPROFILE } from "../screenNames";

const { Navigator, Screen } = createStackNavigator();

export default function ShopStack() {
  return (
    <Navigator initialRouteName={MAIN}>
      <Screen
        name={MAIN}
        component={Home}
        options={({ navigation }) => ({
          headerRight: () => <SearchButton navigation={navigation} />,
        })}
      />

      <Screen
        name={PRODUCT_DETAIL}
        component={ProductDetail}
        options={({ route }) => ({ title: route.params.product.name })}
      />
      <Screen name={OWNERPROFILE} component={OwnerProfile} />
    </Navigator>
  );
}
