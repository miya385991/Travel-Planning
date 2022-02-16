import React,{useContext,useState,useEffect} from 'react';
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




const TableList = () => {

  const { hotel, candidate, setCandidate, regist, setRegist } = useContext(AppContext);
  




  //候補ボタン処理
  const clickCandidate = (e) => {
    const index = e.target.value;
    const candidateHotel = hotel[index]
    const list = [...candidate, candidateHotel];

    // 重複処理
    const result = list.filter((item, index, array) => {
      return array.indexOf(item) === index
    }
    );
    setCandidate(result);
  }

  const clickRegist = (e) => {
    const index = e.target.value;
    const registHotel = hotel[index];
    const list = [...regist, registHotel];
      
      
    // 重複処理
    const result = list.filter((item, index, array) => {
      return array.indexOf(item) === index
    })
      
    setRegist(result)
  };

  

  
    if (hotel.length === 0) {
        return (
          <div >
            検索情報がありません
          </div>
        );
    }


    return (

        <TableContainer component={ Paper } sx={ { width:'80%',height:'100%'}}>
          <Table sx={{ width: '100%'}} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>画像</TableCell>
                <TableCell>名前</TableCell>

              <TableCell>住所</TableCell>
                <TableCell>リンク</TableCell>
                <TableCell>アクション</TableCell>
              </TableRow>
            </TableHead>
            <TableBody >
              {hotel.map((hotels,index) => {
                const {
                  hotelNo,
                  hotelName,
                  hotelThumbnailUrl,
                  hotelInformationUrl,
                  address2,
                } = hotels.hotel[0].hotelBasicInfo;

                return (
                  <TableRow key={hotelNo} >
                    <TableCell>
                      <img src={hotelThumbnailUrl} alt="" />
                    </TableCell>
                    <TableCell>{hotelName}</TableCell>
                    <TableCell>{address2}</TableCell>
                    <TableCell>
                      <a href={`${hotelInformationUrl}`}>詳細へ</a>
                    </TableCell>
                    <TableCell>
                      <Stack spacing={2} direction="row">
                        <Button
                          variant="contained"
                          onClick={clickRegist}
                          value={index}
                        >
                          登録
                        </Button>
                        <Button
                          onClick={clickCandidate}
                          variant="outlined"
                          value={index}
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

export default TableList;
