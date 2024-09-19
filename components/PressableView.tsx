import React, { useState } from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";

const PressableView = ({ title }: { title: string }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <View className="m-4">
      <Pressable
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        style={[
          styles.pressable,
          {
            shadowColor: isPressed ? "#F7D098" : "#000",
            shadowOpacity: isPressed ? 0.85 : 0.5,
            shadowOffset: { width: 0, height: 0 },
            shadowRadius: 32,
            elevation: 7,
          },
        ]}
        accessibilityRole="button"
        accessibilityLabel={title}
      >
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  pressable: {
    height: 148,
    width: 148,
    borderRadius: 32,
    backgroundColor: "#1B1A1A",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#F7D098",
    fontSize: 18,
    fontFamily: "Comfortaa-Medium",
  },
});

export default PressableView;
