import { StyleSheet, Text, View } from "react-native";

const CustomButton = () => {
  return (
    <View style={styles.container}>
      <Text className="text-[#F7D098] text-center text-base font-ComfortaaSemiBold">
        Check Now
      </Text>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1B1A1A",
    borderRadius: 32,
    paddingTop: 20,
    paddingBottom: 20,
    shadowColor: "#F7D098",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8,
  },
});
