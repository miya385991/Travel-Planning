import React, { useState, useContext, useEffect } from "react";

import { useForm } from "react-hook-form";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";

import { AppContext } from "./context/AppContext";




const perfectures = [
  { code: 1, label: "北海道" },
  { code: 2, label: "青森" },
  { code: 3, label: "岩手" },
  { code: 4, label: "宮城" },
  { code: 5, label: "秋田" },
  { code: 6, label: "山形" },
  { code: 7, label: "福島" },
  { code: 8, label: "茨城" },
  { code: 9, label: "栃木" },
  { code: 10, label: "群馬" },
  { code: 11, label: "埼玉" },
  { code: 12, label: "千葉" },
  { code: 13, label: "東京" },
  { code: 14, label: "神奈川" },
  { code: 15, label: "新潟" },
  { code: 16, label: "富山" },
  { code: 17, label: "石川" },
  { code: 18, label: "福井" },
  { code: 19, label: "山梨" },
  { code: 20, label: "長野" },
  { code: 21, label: "岐阜" },
  { code: 22, label: "静岡" },
  { code: 23, label: "愛知" },
  { code: 24, label: "三重" },
  { code: 25, label: "滋賀" },
  { code: 26, label: "京都" },
  { code: 27, label: "大阪" },
  { code: 28, label: "兵庫" },
  { code: 29, label: "奈良" },
  { code: 30, label: "和歌山" },
  { code: 31, label: "鳥取" },
  { code: 32, label: "島根" },
  { code: 33, label: "岡山" },
  { code: 34, label: "広島" },
  { code: 35, label: "山口" },
  { code: 36, label: "徳島" },
  { code: 37, label: "香川" },
  { code: 38, label: "愛媛" },
  { code: 39, label: "高知" },
  { code: 40, label: "福岡" },
  { code: 41, label: "佐賀" },
  { code: 42, label: "長崎" },
  { code: 43, label: "熊本" },
  { code: 44, label: "大分" },
  { code: 45, label: "宮崎" },
  { code: 46, label: "鹿児島" },
  { code: 47, label: "沖縄" },
];

const SearchBarGeoCode = () => {

  const { onSubmitMap, errMsg, spot, setSpot, selectPref, setSelectPref } =
    useContext(AppContext);

  const clickHandler = () => {
    onSubmitMap(selectPref);
    
  };


  return (
    <div>
      {" "}
      <Box
        component="div"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          display: "flex",
        }}
        noValidate
        autoComplete="off"
      >
        <div style={{ width: "60%", display: "flex", margin: "1%" }}>
          <FormControl style={{ width: "100%", margin: "1%" }}>
            <InputLabel id="demo-simple-select-label">
              都道府県を選択してください
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectPref}
              label="都道府県を選択してください"
              onChange={event => setSelectPref(event.target.value)}
            >
              {perfectures.map((perf) => (
                <MenuItem key={perf.code} value={perf.label}>
                  {perf.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl style={{ width: "100%", margin: "1%" }}>
            <InputLabel id="demo-simple-select-label">
              ジャンルを選んでください
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={spot}
              label="Age"
              onChange={(e) => setSpot(e.target.value)}
            >
              <MenuItem value={"hotel"}>ホテル・宿</MenuItem>
              <MenuItem value={"spot"}>観光地</MenuItem>
            </Select>
          </FormControl>

          <Stack
            spacing={2}
            direction="row"
            sx={{ height: "50%", padding: "1rem" }}
          >
            <Button variant="contained" onClick={clickHandler}>検索</Button>
          </Stack>
        </div>
      </Box>
    </div>
  );
};

export default SearchBarGeoCode;
