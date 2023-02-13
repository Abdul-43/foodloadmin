import React, { useState } from "react";
import BasicInput from "../elements/TextField/BasicInput";
import BasicSelect from "../elements/select/BasicSelect";
import { discountType } from "../constant";
import {
  Radio,
  RadioGroup,
  Button,
  Container,
  Spacer,
  Box,
} from "@chakra-ui/react";
import BasicRadio from "../elements/checks/BasicRadio";
export default function CreateProduct() {
  const [data, setData] = useState({});
  const handleInput = (e) => {
    console.log(e.target.value);
    let dataCopy = { ...data };

    if(e){
      dataCopy[e.id] = e.target.value;
      setData(dataCopy);
    }
    if (e) {
      dataCopy[e.target.id] = e.target.value;
      setData(dataCopy);
    }
  };
  return (
    <section id="create-product-container">
      <Container>
        <BasicInput
          placeholder="Enter product name"
          value={data["name"]}
          id="name"
          name="name"
          onChange={handleInput}
        />
        <Box h={5} />
        <BasicInput
          placeholder="Enter product description"
          value={data["description"]}
          id="description"
          name="nadescriptionme"
          onChange={handleInput}
        />
        <Box h={5} />
        <BasicInput
          placeholder="Enter product price"
          value={data["price"]}
          id="price"
          name="price"
          onChange={handleInput}
        />
        <Box h={5} />
        <BasicInput
          placeholder="Enter product discount"
          value={data["discount"]}
          id="discount"
          name="discount"
          onChange={handleInput}
        />
        <Box h={5} />
        <BasicSelect
          placeholder="Enter discount type"
          options={discountType}
          id="discountType"
          name="discountType"
        />
        <Box h={5} />
        <BasicRadio
          handleChange={handleInput}
          id="foodType"
          name="foodType"
          value={data["foodType"]}
        />
        <Box h={5} />
        <Button colorScheme="teal" variant="solid">
          Create Product
        </Button>
      </Container>
    </section>
  );
}
