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

  const { hotel } = useContext(AppContext);
  

  const [candidata, setCandidata] = useState([]);
  useEffect(() => { 

    const listData = () => {
      if (hotel.length === 0) {
        return;
      }
      
      const list = hotel.find((hotels) => hotels );
      console.log(list);
    }
    console.log('hotelhotes');
    listData()
    console.log("hotelhotes");
  }, [hotel])
  



  const clickHandler = (e) => { 
    console.log('click');
    console.log(e);
    console.log("click");
  }
  
  console.log(hotel);
    if (hotel.length === 0) {
        return <div>検索情報がありません</div>;
        }

    return (

        <TableContainer component={ Paper } sx={ { width:'60%'}}>
          <Table sx={{ width: '100%' }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>画像</TableCell>
                <TableCell>名前</TableCell>
                <TableCell>評価</TableCell>
              <TableCell>評価数</TableCell>
              <TableCell>住所</TableCell>
                <TableCell>リンク</TableCell>
                <TableCell>アクション</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {hotel.map((hotels) => {
                const {
                  hotelNo,
                  hotelName,
                  hotelThumbnailUrl,
                  reviewAverage,
                  reviewCount,
                  hotelInformationUrl,
                  address2,
                } = hotels.hotel[0].hotelBasicInfo;
                return (
                  <TableRow key={hotelNo}>
                    <TableCell>
                      <img src={hotelThumbnailUrl} alt="" />
                    </TableCell>
                    <TableCell>{hotelName}</TableCell>
                    <TableCell>{reviewAverage}</TableCell>
                    <TableCell>{reviewCount}</TableCell>
                    <TableCell>{address2}</TableCell>
                    <TableCell>
                      <a href={{ hotelInformationUrl }}>詳細へ</a>
                    </TableCell>
                    <TableCell>
                      <Stack spacing={2} direction="row">
                        <Button variant="contained">登録</Button>
                        <Button onClick={clickHandler} variant="outlined">候補</Button>
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
