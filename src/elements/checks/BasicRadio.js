import React from "react";
import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
export default function BasicRadio({handleChange=()=>{},value=''}) {
  return (
    <div>
      <RadioGroup onChange={handleChange} value={value}>
        <Stack direction="row">
          <Radio value="1">Veg</Radio>
          <Radio value="2">Non-Veg</Radio>
        </Stack>
      </RadioGroup>
    </div>
  );
}
