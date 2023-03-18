import { View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

interface AdjustProps {
  color?: String;
  width?: number;
  height?: number;
}

export default function Search() {
  return (
    <View>
      <Svg width={20} height={40} viewBox="0 0 20 20" fill="none">
        <Path
          d="M19 19L13.803 13.803M13.803 13.803C15.2096 12.3964 15.9998 10.4887 15.9998 8.49949C15.9998 6.51029 15.2096 4.60256 13.803 3.19599C12.3964 1.78941 10.4887 0.999207 8.4995 0.999207C6.51031 0.999207 4.60258 1.78941 3.196 3.19599C1.78943 4.60256 0.999222 6.51029 0.999222 8.49949C0.999222 10.4887 1.78943 12.3964 3.196 13.803C4.60258 15.2096 6.51031 15.9998 8.4995 15.9998C10.4887 15.9998 12.3964 15.2096 13.803 13.803Z"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
}
