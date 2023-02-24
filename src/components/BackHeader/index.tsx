import { useNavigation } from "@react-navigation/native";
import { Center, ChevronLeftIcon, Row } from "native-base";
import React from "react";
import { StyleSheet, Image } from "react-native";
import { Heading, Text, View } from "../Themed";
import Box from "../Themed/BoxView/Box";
import { BoxProps } from "../Themed/BoxView/type";
import { Button } from "../Themed/Button";
import { Container } from "../Themed/Layout";

interface BackHeaderProps extends BoxProps {
  title?: string;
  transparent?: boolean;
}
const BackHeader: React.FC<BackHeaderProps> = ({
  title,
  children,
  transparent,
  ...props
}) => {
  const { goBack } = useNavigation();
  return (
    <Box bgColor={ transparent ? '' : 'background'  }>
      <Container {...props}>
        <Row height={71} alignItems="center">
          <Button onPress={goBack} variant="custom" title="">
              <ChevronLeftIcon />
          </Button>
          <Row flex={1}>
            {Boolean(title) && <Heading  numberOfLines={1} ellipsizeMode='tail' ml={19}>{title}</Heading>}
            {children}
          </Row>
        </Row>
      </Container>
    </Box>
  );
};

export default BackHeader;

const styles = StyleSheet.create({
  btn: {
    borderWidth: 1,
  },
});
