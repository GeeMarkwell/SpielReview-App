import { View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

interface AdjustProps {
  color?: String;
  width?: number;
  height?: number;
}

export default function Post() {
  return (
    <View>
      <Svg width={20} height={40} viewBox="0 0 18 18" fill="none">
        <Path
          d="M9 1.5V16.5M16.5 9H1.5"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
}
