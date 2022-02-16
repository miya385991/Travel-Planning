import React, { useContext } from "react";
import { AppContext } from "./context/AppContext";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const RegistTableList = () => {
  const { regist } = useContext(AppContext);

  return (
    <TableContainer
      component={Paper}
      sx={{ width: "20%", height: "90vh", backgroundColor: "#828282" }}
    >
      <Table sx={{ width: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell component="th" scope="row" sx={{ color: "#fff",fontWeight:800 }}>
              予定リスト{`　`} 1月22日〜1月24日
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {regist.map((hotels) => (
            <TableRow key={hotels.hotel[0].hotelBasicInfo.hotelNo}>
              <TableCell sx={{ color: "#fff" }}>
                {hotels.hotel[0].hotelBasicInfo.hotelName}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RegistTableList;
