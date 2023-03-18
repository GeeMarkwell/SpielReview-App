import { View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

interface AdjustProps {
  color?: String;
  width?: number;
  height?: number;
}

export default function SaveFilled() {
  return (
    <View>
      <Svg width={20} height={40} viewBox="0 0 18 20" fill="none">
        <Path
          d="M14.593 1.322C15.693 1.45 16.5 2.399 16.5 3.507V19L9 15.25L1.5 19V3.507C1.5 2.399 2.306 1.45 3.407 1.322C7.12319 0.890633 10.8768 0.890633 14.593 1.322Z"
          fill="#2DD4CA"
          stroke="#2DD4CA"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
}
