import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { FIREBASE_AUTH } from "../../config/firebase";
import Input from "../input";

const Login = () => {
  const [email, onChangeEmail] = React.useState("");
  const [name, onChangeName] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const connection = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert("Connection Réussi");
    } catch (error: any) {
      console.log(error);
      alert("Connection échouer " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          paddingTop: 50,
          paddingHorizontal: 20,
        }}
      >
        <Text style={styles.signup}>Connection</Text>
        <Text style={styles.details}>
          Entrez vos informations pour vous connectez
        </Text>
        <View style={{ marginVertical: 20 }}>
          <Input
            placeholder="Entrez Votre address Email"
            iconName="email-outline"
            label="Email"
          />
          <Input
            placeholder="Entrez Votre Mot de passe"
            iconName="lock-outline"
            label="Password"
          />
          <TouchableOpacity
            onPress={connection}
            activeOpacity={0.7}
            style={{
              height: 55,
              width: "100%",
              backgroundColor: "#5D5FEE",
              marginVertical: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 18 }}
            >
              Connection
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  textinput: {
    flex: 1,
    justifyContent: "center",
  },
  signup: {
    fontSize: 40,
    fontWeight: "bold",
  },
  details: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default Login;
