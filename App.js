import { View } from "react-native";
import Index from "./src/Index";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Welcome Ankit" }}
        />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
