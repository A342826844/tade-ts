import { useNavigation } from "@react-navigation/native";
import { Center, ChevronLeftIcon, Row } from "native-base";
import React from "react";
import { StyleSheet, Image } from "react-native";
import { Heading, InputProps, Text, View } from "../Themed";
import Box from "../Themed/BoxView/Box";
import { BoxProps } from "../Themed/BoxView/type";
import { Button } from "../Themed/Button";
import { Container } from "../Themed/Layout";
import { Search } from "../Search";
import Logo from "../Logo";

const add = require('@/assets/images/add.png');
const bell = require('@/assets/images/bell.png');

interface HeaderProps extends BoxProps {
  title?: string;
  transparent?: boolean;
  search?: InputProps,
}
const Header: React.FC<HeaderProps> = ({
  title,
  children,
  transparent,
  search,
  ...props
}) => {
  return (
    <Box bgColor={ transparent ? '' : 'background'  }>
      <Container  {...props}>
        <Row height={71} alignItems="center">
          <Logo />
          <Box marginLeft={5} flex={1}>
            <Search {...search} />
          </Box>
          {/* <Row marginLeft={4}>
            <Box marginRight={3}>
              <Button  title={""} variant="custom" >
                <Image style={{ width: 19, height: 19 }} source={add} />
              </Button>
            </Box>
            <Button title={""} variant="custom" >
              <Image style={{ width: 20, height: 21 }} source={bell} />
            </Button>
          </Row> */}
        </Row>
      </Container>
    </Box>
  );
};

export default Header;

const styles = StyleSheet.create({
  btn: {
    borderWidth: 1,
  },
});
