import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import MapScreen from "../screens/MapScreen";
import CommentsScreen from "../screens/CommentsScreen";

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Registration"
      component={RegistrationScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Home"
      component={BottomTabNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Map"
      component={MapScreen}
      options={{
        headerTitle: "Мапа",
        headerTitleAlign: "center",
      }}
    />
    <Stack.Screen
      name="Comments"
      component={CommentsScreen}
      options={{
        headerTitle: "Коментарі",
        headerTitleAlign: "center",
      }}
    />
  </Stack.Navigator>
);
export default StackNavigator;
