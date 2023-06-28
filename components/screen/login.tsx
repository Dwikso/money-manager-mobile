import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { FIREBASE_AUTH } from "../../config/firebase";
import Input from "../input";

const Sign = () => {
  const [email, onChangeEmail] = React.useState("");
  const [name, onChangeName] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const login = async () => {
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
        <Text style={styles.signup}>Inscription</Text>
        <Text style={styles.details}>
          Entrez vos informations pour vous inscrire
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

export default Sign;
