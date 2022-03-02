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
import { logRoles } from '@testing-library/react';




const TableList = () => {

  const { hotel, candidate, setCandidate, regist, setRegist } = useContext(AppContext);
  const [hotelTable, setHotelTable] = useState([]);

  //候補ボタン処理
  const clickCandidate = (e) => {
    const index = e.target.value;
    const candidateHotel = hotel[index];
      setHotelTable({
        ...hotelTable,
        id: candidate.length + 1,
        name: candidateHotel.hotel[0].hotelBasicInfo.hotelName,
        address: candidateHotel.hotel[0].hotelBasicInfo.address2,
        lat: candidateHotel.hotel[0].hotelBasicInfo.latitude,
        lng: candidateHotel.hotel[0].hotelBasicInfo.longitude,
      });
      setCandidate([...regist, hotelTable]);


  }


    const clickRegist = (e) => {
      const index = e.target.value
      const registHotel = hotel[index];


      setHotelTable({
        ...hotelTable,
        id : regist.length + 1,
        name:registHotel.hotel[0].hotelBasicInfo.hotelName,
        address:registHotel.hotel[0].hotelBasicInfo.address2,
        lat:registHotel.hotel[0].hotelBasicInfo.latitude,
        lng:registHotel.hotel[0].hotelBasicInfo.longitude
      })
      setRegist([...regist, hotelTable]);
    };
  
  




  
    if (hotel.length === 0) {
        return (
          <div style={ { textAlign:'center',width:'100%'}}>
          都道府県と目的を選択してください
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
