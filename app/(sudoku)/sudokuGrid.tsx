import CustomButton from "@/components/CustomButton";
import GridCell from "@/components/GridCell";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SudokuGrid = () => {
  const size = 9;
  return (
    <SafeAreaView className="flex-1 justify-center bg-[#161616]">
      <View className="p-4">
        <View className="pb-10">
          <Text className="text-[#F7D098] text-3xl leading-10 font-ComfortaaMedium">
            Woohoo! Time To Create Your Sudoku
          </Text>
        </View>
        <View
          className="bg-[#1B1A1A] w-full min-h-[400px] mx-auto mt-10 mb-10 p-6"
          style={styles.container}
        >
          <View className="flex flex-row flex-wrap justify-center flex-1 items-center">
            {Array.from({ length: size * size }).map((_, index) => (
              <GridCell key={index} size={size} />
            ))}
          </View>
        </View>
        <View className="px-4">
          <CustomButton />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SudokuGrid;

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    shadowColor: "#1B1A1A",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.85,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
