import { Image } from "native-base";
import React from "react";
import { Box, Text } from "../Themed";

const noData = require('@/assets/images/no-data.png');

const Empty = () => {
  return (
    <Box minH={200} maxH={500} height='100%' alignItems='center' justifyContent='center'>
      <Image width={88} height={102} alt='no-data' source={noData} />
      <Text mt={2} color='subText'>No hay datos por el momento</Text>
    </Box>
  )
}

export default Empty;
