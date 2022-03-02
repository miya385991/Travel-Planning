import React,{useContext,useEffect,useState} from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { height } from '@mui/system';

import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";
import Button from "@mui/material/Button";
import { AppContext } from "./context/AppContext";

function createData(img,name) {
  return {img, name};
}



const s = {
  root: {
    width: "30%",
    height: "90vh",
    backgroundColor: "#828282",
  },
  th: {
    color: "#fff",
    fontWeight: 800,
      width: "50%",
    textAlign: "center",
  },
  td: {
    color: "#fff",
    fontWeight: 800,
    width: "50%",
  },
  img: {
    borderRadius: "50%",
    width: "50px",
    height: "50px",
  },
};

const FriendTable = () => {
    const { getDB, db, user, getData, userId } =
      useContext(AppContext);

    const clickHandler = (e) => { 
        console.log('click');
        const members = rows[e.target.value]
         getData("user", "name",members.name);
        }


    useEffect(() => { 
        getDB(db, "user");
    },[])
    
    const rows =user;


const img = process.env.PUBLIC_URL+"/image/sample.png"

  return (
    <>
      {" "}
      <TableContainer component={Paper} sx={s.root}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={s.th}>アイコン</TableCell>
              <TableCell sx={s.th}>名前</TableCell>
              <TableCell sx={s.th}>追加</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={s.td}>
                  <img
                    src={row.img === "" ? img : `/image/${row.img}`}
                    alt=""
                    style={s.img}
                  />
                </TableCell>
               <TableCell sx={s.td}>{row.name}</TableCell>
                <TableCell sx={s.td}>
                  <Button
                    onClick={clickHandler}
                    value={index}
                    variant="contained"
                  >
                    追加
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default FriendTable