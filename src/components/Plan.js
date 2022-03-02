import React, { useState, useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";

import { AppContext } from "./context/AppContext";
import FriendTable from "./FriendTable";

import { getStorage, ref, uploadString, uploadBytes } from "firebase/storage";
import { getApp } from "firebase/app";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { s } from "./styles/PlanStyle";

const img = process.env.PUBLIC_URL + "/image/sample.png";

const Plan = () => {
    const { member, duplicateCheck, db, userId, storage, userDB } =
        useContext(AppContext);
    const navigate = useNavigate();
    const [friendList, setFriendList] = useState([]);

    const friends = duplicateCheck(member);
    const [preview, setPreview] = useState("");
    const [image, setImage] = useState("");
    // フォーム項目
    const [title, setTitle] = useState("");
    const [startPlan, setStatPlan] = useState("");
    const [endPlan, setEndPlan] = useState("");
    const [author, setAuthor] = useState("miya");

    const handleChangeFile = (event) => {
        const { files } = event.target;
        setImage(files[0].name);
        setPreview(window.URL.createObjectURL(files[0]));
    };

    const userFriend = async (dbname, uid) => {

        console.log('とおたよ２');
            const docRef =  doc(db, dbname, uid);
            const docSnap =await getDoc(docRef);
        if (docSnap.exists()) {
            setFriendList([...friendList, docSnap.data()])
        };
    };
    
    useEffect(() => { 
        console.log('とおたよ');
        friends.forEach(async (friend) => { 
            userFriend("user", friend);
        })
    },[member])

    console.log(friendList);

  //   console.log(storage);

  const clickHndler = (e) => {
    e.preventDefault();
    console.log("click");

    const storageRef = ref(storage, image);
    console.log(storageRef);
    console.log(uploadBytes(storageRef, preview));
    //       .then((snapshot) => {
    //   console.log("Uploaded a blob or file!");
    // });
    console.log("upload完了");

    //   try {
    //       await addDoc(collection(db, "plants"), {
    //           title: title,
    //           author: author,
    //           startPlan: startPlan,
    //           endPlan: endPlan,
    //           image: image,
    //           members: member,
    //       })
    //       console.log('ok');
    //       navigate("/project");
    //   } catch (e) {
    //       console.log(e.message);
    //       console.log(e.code);
    //   }
  };


  return (
    <div style={s.root}>
      <FriendTable />
      <Box autoComplete="off" component="form" sx={s.forms}>
        <div style={s.file}>
          <img src={preview} style={s.img} />
          <input
            type="file"
            placeholder="名前"
            onChange={handleChangeFile}
            style={s.fileInput}
          />
        </div>

        <TableContainer component={Paper} sx={s.tables}>
          <Table size="small" aria-label="a dense table" sx={s.tables}>
            <TableBody>
              <TableRow
                sx={
                  ({
                    "&:last-child td, &:last-child th": { border: 0 },
                  },
                  s.cell)
                }
              >
                <TableCell component="th" scope="row" colspan="2">
                  <TextField
                    required
                    id="outlined-required"
                    label="タイトル"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    sx={{ width: "100%" }}
                  />
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  出発日：
                  <input
                    type="date"
                    value={startPlan}
                    onChange={(e) => setStatPlan(e.target.value)}
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  終了日：
                  <input
                    type="date"
                    value={endPlan}
                    onChange={(e) => setEndPlan(e.target.value)}
                  />
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" colspan="2">
                  作成者：{author}
                </TableCell>{" "}
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>メンバー</TableCell>
                <TableCell component="th" scope="row" sx={s.memberList}>
                  {friendList.map((friend, index) => {
                    return (
                      <div key={index}>
                        <img
                          src={
                            friend.img === ""
                              ? img
                              : `${process.env.PUBLIC_URL}/image/${friend.img}`
                          }
                          alt=""
                          style={s.member}
                        />
                      </div>
                    );
                  })}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Button
          variant="contained"
          sx={{ margin: "3%" }}
          onClick={clickHndler}
          type="submit"
        >
          登録
        </Button>
      </Box>
    </div>
  );
};

export default Plan;
