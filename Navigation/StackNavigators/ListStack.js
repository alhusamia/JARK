import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import { MAIN, PRODUCT_DETAIL } from "../screenNames";

import Home from "../../Components/AllProducts";
import ProductDetail from "../../Components/ProductDetail/ProductDetail";

const { Navigator, Screen } = createSharedElementStackNavigator();
export default function ListStack() {
  return (
    <Navigator
      initialRouteName={MAIN}
      screenOptions={{
        headerMode: "none",
        defaultNavigationOptions: {
          cardStyleInterpolator: ({ current: { progress } }) => {
            return { cardStyle: { opacity: progress } };
          },
        },
        cardStyle: {
          backgroundColor: "transparent",
        },
      }}
    >
      <Screen name={MAIN} component={Home} />
      <Screen name={PRODUCT_DETAIL} component={ProductDetail} />
    </Navigator>
  );
}

const AppContainer = createAppContainer(stackNavigator);
