import { Href, Link, useRouter } from "expo-router";
import React, { ReactNode, useState } from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";

const PressableView = ({
  link,
  children,
  height = "100%",
  width = "100%",
}: {
  link?: Href<string | object>;
  children: ReactNode;
  height?: number | string;
  width?: number | string;
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const router = useRouter();
  const handlePress = () => {
    if (link) {
      router.push(link); // Navigate to the link if it's provided
    }
  };
  return (
    <View className="m-4">
      <Pressable
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        onPress={handlePress}
        style={[
          styles.pressable,
          {
            height: height as number | "auto",
            width: width as number | "auto",
            shadowColor: isPressed ? "#F7D098" : "#000",
            shadowOpacity: isPressed ? 0.85 : 0.5,
            shadowOffset: { width: 0, height: 0 },
            shadowRadius: 32,
            elevation: 7,
          },
        ]}
        accessibilityRole="button"
      >
        {children}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  pressable: {
    borderRadius: 32,
    backgroundColor: "#1B1A1A",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PressableView;
