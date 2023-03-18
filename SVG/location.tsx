import { View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

interface AdjustProps {
  color?: String;
  width?: number;
  height?: number;
}

export default function Location() {
  return (
    <View>
      <Svg width={20} height={40} viewBox="0 0 20 19" fill="none">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.69 16.933L6.693 16.934C6.89 17.02 7 17 7 17C7 17 7.11 17.02 7.308 16.934L7.31 16.933L7.316 16.93L7.334 16.922C7.42893 16.8779 7.52263 16.8312 7.615 16.782C7.801 16.686 8.061 16.542 8.372 16.349C8.992 15.965 9.817 15.383 10.646 14.584C12.302 12.988 14 10.493 14 7C14 6.08075 13.8189 5.1705 13.4672 4.32122C13.1154 3.47194 12.5998 2.70026 11.9497 2.05025C11.2997 1.40024 10.5281 0.884626 9.67878 0.532843C8.8295 0.18106 7.91925 0 7 0C6.08075 0 5.1705 0.18106 4.32122 0.532843C3.47194 0.884626 2.70026 1.40024 2.05025 2.05025C1.40024 2.70026 0.884626 3.47194 0.532843 4.32122C0.18106 5.1705 -1.36979e-08 6.08075 0 7C0 10.492 1.698 12.988 3.355 14.584C4.04875 15.2503 4.8106 15.8419 5.628 16.349C5.94459 16.5456 6.27029 16.7271 6.604 16.893L6.666 16.922L6.684 16.93L6.69 16.933ZM7 9.25C7.59674 9.25 8.16903 9.01295 8.59099 8.59099C9.01295 8.16903 9.25 7.59674 9.25 7C9.25 6.40326 9.01295 5.83097 8.59099 5.40901C8.16903 4.98705 7.59674 4.75 7 4.75C6.40326 4.75 5.83097 4.98705 5.40901 5.40901C4.98705 5.83097 4.75 6.40326 4.75 7C4.75 7.59674 4.98705 8.16903 5.40901 8.59099C5.83097 9.01295 6.40326 9.25 7 9.25Z"
          fill="#2DD4CA"
        />
      </Svg>
    </View>
  );
}
