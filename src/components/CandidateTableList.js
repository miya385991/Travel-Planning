import React,{useContext} from 'react'
import { AppContext } from "./context/AppContext";



import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";




const Candidate = () => {

  const { candidate} = useContext(AppContext);

  return (
    <TableContainer component={Paper} sx={{ width: "20%", height: "50vh" }}>
      <Table sx={{ width: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >候補リスト</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {candidate.map((hotels) => (
            <TableRow key={hotels.hotel[0].hotelBasicInfo.hotelNo}>
              <TableCell >
                {hotels.hotel[0].hotelBasicInfo.hotelName}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Candidate;
