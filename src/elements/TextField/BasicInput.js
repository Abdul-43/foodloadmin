import React from "react";
import { Input } from "@chakra-ui/react";
export default function BasicInput({ placeholder="", id="", name="", value="", onChange=()=>{} }) {
  return (
    <Input
      variant="filled"
      placeholder={placeholder}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}
