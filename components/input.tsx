import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

type InputProps = {
  label: string;
  iconName: string;
  error: string;
  password: string;
  placeholder: string;
};

const Input: React.FunctionComponent<InputProps> = (
  props,
  onFocus = () => {}
) => {
  const { label, iconName, error, password } = props;
  const [isFocused, setIsFocused] = React.useState(false);
  const [hidePassword, setHidePassword] = React.useState(password);
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          { borderColor: error ? "red" : isFocused ? "#797885" : "#F3F4FB" },
        ]}
      >
        <Icon name={iconName} style={styles.icons} />
        <TextInput
          secureTextEntry={hidePassword}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          style={{ color: "#797885", flex: 1 }}
          {...props}
        />
      </View>
      {error && (
        <Text style={{ color: "red", fontSize: 12, marginTop: 7 }}>
          {error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: "#BABBC3",
  },
  inputContainer: {
    height: 55,
    backgroundColor: "#F3F4FB",
    paddingHorizontal: 15,
    borderWidth: 0.5,
    alignItems: "center",
    flexDirection: "row",
  },
  icons: {
    fontSize: 22,
    color: "#797885",
    marginRight: 10,
  },
});

export default Input;
