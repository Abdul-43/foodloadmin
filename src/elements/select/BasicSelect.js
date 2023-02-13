import { Select } from "@chakra-ui/react";
import React from "react";

export default function BasicSelect({
  placeholder = "",
  handleChange = () => {},
  options = [],
}) {
  return (
    <div>
      <Select placeholder={placeholder} onChange={handleChange}>
        {options.length > 0 &&
          options.map((o, i) => <option value={o.value}>{o.label}</option>)}
      </Select>
    </div>
  );
}
