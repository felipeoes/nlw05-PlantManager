import React, { useState } from "react";
import { SafeAreaView, Text, Image, StyleSheet } from "react-native";

import wateringImg from "../assets/watering.png";
import colors from "../styles/colors";
import { Button } from "../components/Button";

export function Welcome() {
  const [visible, setVisible] = useState(false);

  function handleVisibility() {
    setVisible(!visible);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Manage {"\n"}
        your plants {"\n"}
        in an easy way
      </Text>

      {visible && <Image source={wateringImg} style={styles.image} />}

      <Text style={styles.subtitle}>
        Do not forget to water your plants. {"\n"}
        We take care of remembering you whenever it is necessary.
      </Text>
      <Button title=">" onPress={handleVisibility} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
    marginTop: 38,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    paddingHorizontal: 10,
  },
  image: {
    width: 292,
    height: 284,
  },
  buttonText: {
    color: colors.white,
    fontSize: 24,
  },
});
