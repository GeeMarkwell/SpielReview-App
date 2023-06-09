import { View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

interface AdjustProps {
  color?: String;
  width?: number;
  height?: number;
}

export default function Home() {
  return (
    <View>
      <Svg width={20} height={40} viewBox="0 0 22 21" fill="none">
        <Path
          d="M1.25 10.9991L10.204 2.04409C10.644 1.60509 11.356 1.60509 11.795 2.04409L20.75 10.9991M3.5 8.74909V18.8741C3.5 19.4951 4.004 19.9991 4.625 19.9991H8.75V15.1241C8.75 14.5031 9.254 13.9991 9.875 13.9991H12.125C12.746 13.9991 13.25 14.5031 13.25 15.1241V19.9991H17.375C17.996 19.9991 18.5 19.4951 18.5 18.8741V8.74909M7.25 19.9991H15.5"
          stroke="#FF453A"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
}
