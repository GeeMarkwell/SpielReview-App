import { View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

interface AdjustProps {
  color?: String;
  width?: number;
  height?: number;
}

export default function Profile() {
  return (
    <View>
      <Svg width={20} height={40} viewBox="0 0 18 22" fill="none">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.75 5C12.75 5.99456 12.3549 6.94839 11.6517 7.65165C10.9484 8.35491 9.99457 8.75 9.00001 8.75C8.00545 8.75 7.05162 8.35491 6.34836 7.65165C5.6451 6.94839 5.25001 5.99456 5.25001 5C5.25001 4.00544 5.6451 3.05161 6.34836 2.34835C7.05162 1.64509 8.00545 1.25 9.00001 1.25C9.99457 1.25 10.9484 1.64509 11.6517 2.34835C12.3549 3.05161 12.75 4.00544 12.75 5ZM1.50101 19.118C1.53314 17.1504 2.33735 15.2742 3.74018 13.894C5.14302 12.5139 7.0321 11.7405 9.00001 11.7405C10.9679 11.7405 12.857 12.5139 14.2598 13.894C15.6627 15.2742 16.4669 17.1504 16.499 19.118C14.1464 20.1968 11.5882 20.7535 9.00001 20.75C6.32401 20.75 3.78401 20.166 1.50101 19.118Z"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
}
