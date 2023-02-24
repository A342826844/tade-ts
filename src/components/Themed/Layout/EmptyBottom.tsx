import Breakpoints from "@/constants/Breakpoints";
import { StyleSheet, Image } from "react-native";
import Box from "../BoxView/Box";
import { BoxProps } from "../BoxView/type";

const EmptyBottom: React.FC<BoxProps> = (props) => {
  return (
    <Box style={[styles.container, props.style]} />
  );
};

export default EmptyBottom;

const styles = StyleSheet.create({
  container: {
    paddingBottom: Breakpoints.LayoutBottomHeight,
  },
});
