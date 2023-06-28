import React from "react";
import { View } from "react-native";
import Home from "./home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

type AcceuilProps = {
  navigation: any;
};

const Acceuil: React.FunctionComponent<AcceuilProps> = (props) => {
  const { navigation } = props;
  return (
    <View>
      <Home navigation={navigation} />
    </View>
  );
};

export default Acceuil;
