import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/screen/login";
import Home from "./screens/HomeScreen";
import Sign from "./components/screen/signup";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Connection"
          component={Login}
          options={{ title: "Connection" }}
        />
        <Stack.Screen
          name="Inscription"
          component={Sign}
          options={{ title: "Inscription" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
