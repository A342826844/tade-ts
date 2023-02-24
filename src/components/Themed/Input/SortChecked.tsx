import { Center } from "native-base";
import React from "react";
import { Button } from "../Button";
import { Text } from "../Text";
import Icon from "../../icons/Icon";
import Box from "../BoxView/Box";

interface SortCheckedProps {
  value: number;
  label: string;
  onChange: (value: number) => void;
}

const SortChecked: React.FC<SortCheckedProps> = ({
  value,
  label,
  onChange,
}) => {
  return (
    <Button
      title=""
      variant="custom"
      onPress={() => {
        if (value === 0) {
          onChange(1);
          return;
        }
        if (value === 1) {
          onChange(2);
          return;
        }
        if (value === 2) {
          onChange(1);
          return;
        }
        onChange(1);
      }}
    >
      <Box borderRadius={10} bgColor="inputBackground" width={105} height={38}>
        <Center height="100%" flexDirection="row">
          <Center flex={1}>
            <Text>{label}</Text>
          </Center>
          <Box justifyContent="center" mr={3} height={5}>
            <Box height={2}>
              <Icon
                color={value === 1 ? "text" : "subText"}
                family="AntDesign"
                name={"caretup"}
                size={8}
              />
            </Box>
            <Box height={2}>
              <Icon
                color={value === 2 ? "text" : "subText"}
                family="AntDesign"
                name={"caretdown"}
                size={8}
              />
            </Box>
          </Box>
        </Center>
      </Box>
    </Button>
  );
};

export default SortChecked;
