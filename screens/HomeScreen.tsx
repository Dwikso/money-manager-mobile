import { StatusBar } from "expo-status-bar";
import { View, Button, Text, Alert } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";

type NavigationProps = {
  navigation: any;
};

const Home: React.FunctionComponent<NavigationProps> = (props) => {
  const { navigation } = props;
  const onSign = () => {
    navigation.navigate("Inscription");
  };
  return (
    <View style={styles.button}>
      <View>
        <TouchableOpacity
          style={styles.login}
          onPress={() =>
            navigation.navigate("Connection", { language: "french" })
          }
        >
          <Text style={styles.logintext}>Connection</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
      <View style={styles.mt}>
        <TouchableOpacity style={styles.inscription} onPress={onSign}>
          <Text style={styles.textsign}>Inscription</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 650,
  },
  sign: {
    marginTop: 10,
  },
  logintext: {
    color: "#3F5DCA",
  },
  textsign: {
    color: "white",
  },
  login: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#FFFFFF",
    width: "75%",
    borderRadius: 25,
    fontWeight: "bold",
    fontSize: 27,
    textAlign: "center",
    marginLeft: 50,
  },
  inscription: {
    alignItems: "center",
    backgroundColor: "#395AFC",
    padding: 10,
    width: "75%",
    borderRadius: 25,
    fontWeight: "bold",
    fontSize: 27,
    textAlign: "center",
    marginTop: "10%",
    marginLeft: 50,
  },
  mt: {
    marginTop: 20,
  },
});

export default Home;
