import { View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

interface AdjustProps {
  color?: String;
  width?: number;
  height?: number;
}

export default function Save() {
  return (
    <View>
      <Svg width={20} height={40} viewBox="0 0 18 20" fill="none">
        <Path
          d="M14.593 1.32157C15.693 1.44957 16.5 2.39857 16.5 3.50657V18.9996L9 15.2496L1.5 18.9996V3.50657C1.5 2.39857 2.306 1.44957 3.407 1.32157C7.12319 0.890206 10.8768 0.890206 14.593 1.32157Z"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
}
