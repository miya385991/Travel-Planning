import React, { useState,useContext } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import { AppContext } from "./context/AppContext";



const SearchBarGeoCode = () => {
  const { onSubmitMap, errMsg } = useContext(AppContext);


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div>
      {" "}
      <FormGroup onSubmit={handleSubmit(onSubmitMap)}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            display: "flex",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-helperText"
            label="住所を入力してください"
            defaultValue={watch("example")}
            helperText="キーワードを入力してください"
            {...register("example", { required: true })}
          />
          <Stack
            spacing={2}
            direction="row"
            sx={{ height: "50%", padding: "1rem" }}
          >
            <Button variant="contained">検索</Button>
          </Stack>
        </Box>
      </FormGroup>
      {errors.example && <span>{errMsg}</span>}
    </div>
  );
};

export default SearchBarGeoCode;
