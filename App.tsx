import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/screen/login";
import Home from "./screens/HomeScreen";
import Sign from "./components/screen/signup";
import List from "./screens/dbtest";
import React, { useState, useEffect } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { FIREBASE_AUTH } from "./config/firebase";

const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name="Essaie db" component={List} />
    </InsideStack.Navigator>
  );
}

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log("user", user);
    });
  }, []);

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
