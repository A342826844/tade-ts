import Breakpoints from "@/constants/Breakpoints";
import { StyleSheet, Image } from "react-native";
import Box from "../BoxView/Box";
import { BoxProps } from "../BoxView/type";

const Container: React.FC<BoxProps> = (props) => {
  return <Box {...props} style={[styles.content, props.style]} />;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingLeft: Breakpoints.LayoutPaddingX,
    paddingRight: Breakpoints.LayoutPaddingX,
  },
});
