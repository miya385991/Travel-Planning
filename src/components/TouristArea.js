import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "./context/AppContext";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Data } from "@react-google-maps/api";

const TouristArea = () => {
  const {
    candidate,
    setCandidate,
    regist,
    setRegist,
    searchSpot,
    sightseeing,
    selectPref,
  } = useContext(AppContext);

const data = searchSpot(selectPref);
//候補ボタン処理
const clickCandidate = (e) => {
    const index = e.target.value;
  const candidateTable = data[index];
  candidateTable.id= candidate.length;
  delete candidateTable.type;
  setCandidate([...candidate, candidateTable]);
  };

  const clickRegist = (e) => {
    const index = e.target.value;
    const registTable = data[index];
    registTable.id = regist.length;
    delete registTable.type;
    setRegist([...regist, registTable]);
  };



  return (
    <TableContainer component={Paper} sx={{ width: "80%" }}>
      <Table sx={{ width: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>種類</TableCell>
            <TableCell>名前</TableCell>

            <TableCell>住所</TableCell>
            <TableCell>アクション</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((spot, index) => {
            const { address, name, id,type } = spot;
            return (
              <TableRow key={id}>
                <TableCell>{type}</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{address}</TableCell>
                <TableCell>
                  <Stack spacing={2} direction="row">
                    <Button
                      variant="contained"
                      onClick={clickRegist}
                      value={spot.id}
                    >
                      登録
                    </Button>
                    <Button
                      onClick={clickCandidate}
                      variant="outlined"
                      value={spot.id}
                    >
                      候補
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TouristArea;
