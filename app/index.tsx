import PressableView from "@/components/PressableView";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-[#161616]">
      <View className="p-4">
        <View className="pb-10 w-52">
          <Text className="text-[#F7D098] text-3xl leading-10 font-ComfortaaMedium">
            Select Your Sudoku
          </Text>
        </View>
        <View className="flex flex-row flex-wrap justify-around ">
          <PressableView title="Original" />
          <PressableView title="16x16" />
          <PressableView title="12x12" />
          <PressableView title="10x10" />
          <PressableView title="6x6" />
          <PressableView title="8x8" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
