import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Welcome } from "../pages/Welcome";
import { SignIn } from "../pages/SignIn";
import { Confirmation } from "../pages/Confirmation";

import colors from "../styles/colors";
import AuthRoutes from "./tab.routes";
import { SavePlant } from "../pages/SavePlant";
const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white,
      },
    }}
  >
    <stackRoutes.Screen name="Welcome" component={Welcome} />

    <stackRoutes.Screen name="SignIn" component={SignIn} />

    <stackRoutes.Screen name="Confirmation" component={Confirmation} />

    <stackRoutes.Screen name="Home" component={AuthRoutes} />

    <stackRoutes.Screen name="PlantSave" component={SavePlant} />

    <stackRoutes.Screen name="MyPlants" component={AuthRoutes} />
  </stackRoutes.Navigator>
);

export default AppRoutes;
