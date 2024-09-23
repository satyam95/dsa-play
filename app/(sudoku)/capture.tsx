import PressableView from "@/components/PressableView";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Capture = () => {
  return (
    <SafeAreaView className="flex-1 justify-center bg-[#161616]">
      <View className="p-4">
        <View className="pb-10">
          <Text className="text-[#F7D098] text-3xl leading-10 font-ComfortaaMedium">
            Time To See, What You Have Special
          </Text>
        </View>
        <View className="flex flex-row justify-center">
          <PressableView height={138} width={138}>
            <View className="flex justify-center flex-col items-center gap-5">
              <Image
                className="w-11 h-11"
                style={{ resizeMode: "contain" }}
                source={require("@/assets/images/camera.png")}
              />
              <Text className="text-[#F7D098] font-ComfortaaMedium text-base">
                Camera
              </Text>
            </View>
          </PressableView>
          <PressableView height={138} width={138}>
            <View className="flex justify-center flex-col items-center gap-5">
              <Image
                className="w-11 h-11"
                style={{ resizeMode: "contain" }}
                source={require("@/assets/images/upload.png")}
              />
              <Text className="text-[#F7D098] font-ComfortaaMedium text-base">
                Uploads
              </Text>
            </View>
          </PressableView>
        </View>
        <View className="flex flex-row justify-center">
          <PressableView height={138} width={305} link="/sudokuGrid">
            <View className="flex justify-center flex-row items-center gap-5">
              <Image
                className="w-11 h-11"
                style={{ resizeMode: "contain" }}
                source={require("@/assets/images/gallery.png")}
              />
              <Text className="text-[#F7D098] font-ComfortaaMedium text-base">
                Create
              </Text>
            </View>
          </PressableView>
        </View>
        <View className="mt-24">
          <Text className="text-[#F7D098] text-lg leading-7 font-ComfortaaMedium">
            Fun Fact
          </Text>
          <Text className="text-white text-xs leading-none font-ComfortaaMedium">
            American architect Howard Garns , developed the modern game of
            Sudoku in 1979.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Capture;
