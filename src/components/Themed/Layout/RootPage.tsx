import Breakpoints from "@/constants/Breakpoints";
// import { View } from "native-base";
import { StyleSheet, Image } from "react-native";
import { View } from "../BoxView";
import Box from "../BoxView/Box";
import { ViewProps } from "../BoxView/type";

const RootPage: React.FC<ViewProps> = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      {props.children}
      {/* <Box height={Breakpoints.LayoutBottomHeight} /> */}
    </View>
  );
};

export default RootPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: Breakpoints.LayoutBottomHeight,
    // backgroundColor: "red",
  },
});
