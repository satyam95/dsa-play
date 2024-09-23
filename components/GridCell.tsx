import { TextInput, View } from "react-native";

const GridCell = ({ size }: { size: number }) => {
  const cellSize = 100 / size;
  return (
    <View
      className="border border-[#707070] items-center justify-center"
      style={{
        width: `${cellSize}%`,
        height: `${cellSize}%`,
      }}
    >
      <TextInput
        className="text-center text-[#F7D098] text-base font-ComfortaaSemiBold"
        keyboardType="numeric"
        maxLength={1}
      />
    </View>
  );
};

export default GridCell;
