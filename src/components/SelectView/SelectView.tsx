import React from "react";
import { StyleSheet } from "react-native";
import { Box, Text, View } from "@/components/Themed";
import { BoxProps } from "@/components/Themed/types";
import { Row, Select } from "native-base";
import { Container } from "@/components/Themed/Layout";
import SortChecked from "@/components/Themed/Input/SortChecked";

type SelectDataItem = {
  label: string;
  value: string | number;
  [key: string]: any;
};
interface SelectViewProps extends BoxProps {
  selectData: SelectDataItem[];
  onChangeSelect: (value: string) => void;
  selectedValue: string;
  sort1: {
    label: string;
    value: number;
    setValue: (value: number) => void;
  };
  sort2: {
    label: string;
    value: number;
    setValue: (value: number) => void;
  };
}

const SelectView: React.FC<SelectViewProps> = ({
  selectData,
  sort1,
  sort2,
  onChangeSelect,
  selectedValue,
}) => {
  const [value, setValue] = React.useState(false);

  return (
    <Container>
      <Row width="100%" justifyContent="space-between">
        <Box bgColor="inputBackground" borderRadius={10} width="31%">
          <Select
            selectedValue={selectedValue}
            placeholder='分类'
            onValueChange={(item) => {
              onChangeSelect(item);
            }}
            borderColor="inputBackground"
            borderRadius={10}
            height={38}
          >
            {selectData.map((item) => {
              return <Select.Item key={item.value} label={item.label} value={`${item.value}`} />;
            })}
          </Select>
        </Box>
        <Box width="31%">
          <SortChecked
            value={sort1.value}
            label={sort1.label}
            onChange={(_value) => {
              sort1.setValue(_value);
            }}
          />
        </Box>
        <Box width="31%">
          <SortChecked
            value={sort2.value}
            label={sort2.label}
            onChange={(_value) => {
              sort2.setValue(_value);
            }}
          />
        </Box>
      </Row>
    </Container>
  );
};

export default SelectView;
