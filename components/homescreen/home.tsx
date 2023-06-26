import { StyleSheet, Text, View, Button } from "react-native";
import Sign from "./signup";
import Login from "./login";

function Home() {
  return (
    <View style={styles.button}>
      <Sign />
      <Login />
    </View>
  );
}
{
}

const styles = StyleSheet.create({
  button: {
    marginTop: 400,
  },
});

export default Home;
