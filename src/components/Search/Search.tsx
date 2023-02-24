import { ColorsKey } from "@/constants/Colors";
import { GestureResponderEvent } from "react-native";
import React from "react";
import { VStack, Box } from "native-base";
import { Input, InputProps } from "../Themed/Input";
import Icon from "../icons/Icon";
import { Button } from "../Themed";

const Search: React.FC<
  InputProps & { onSearchPress?: (event: GestureResponderEvent) => void }
> = ({ onSearchPress, ...props }) => {
  return (
    <VStack w="100%" space={5} alignSelf="center">
      <Input
        placeholder="SHIBI"
        width="100%"
        paddingLeft={4}
        borderRadius='full'
        InputRightElement={
          <Box marginRight={4}>
            <Button
              title=""
              variant="custom"
              onPress={(event) => {
                event.stopPropagation();
                event.preventDefault();
                onSearchPress && onSearchPress(event);
              }}
            >
              <Icon name="search" color="text" />
            </Button>
          </Box>
        }

        {...props}
      />
    </VStack>
  );
};

export default Search;
