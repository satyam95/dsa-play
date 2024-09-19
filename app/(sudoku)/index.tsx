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
          <PressableView link="/capture" height={138} width={138}>
            <Text className="text-[#F7D098] font-ComfortaaMedium text-lg">
              Orginal
            </Text>
          </PressableView>
          <PressableView height={138} width={138}>
            <Text className="text-[#F7D098] font-ComfortaaMedium text-lg">
              16x16
            </Text>
          </PressableView>
          <PressableView height={138} width={138}>
            <Text className="text-[#F7D098] font-ComfortaaMedium text-lg">
              12x12
            </Text>
          </PressableView>
          <PressableView height={138} width={138}>
            <Text className="text-[#F7D098] font-ComfortaaMedium text-lg">
              10x10
            </Text>
          </PressableView>
          <PressableView height={138} width={138}>
            <Text className="text-[#F7D098] font-ComfortaaMedium text-lg">
              8x8
            </Text>
          </PressableView>
          <PressableView height={138} width={138}>
            <Text className="text-[#F7D098] font-ComfortaaMedium text-lg">
              6x6
            </Text>
          </PressableView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
