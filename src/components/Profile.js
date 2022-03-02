import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import RegistTableList from "./RegistTableList";
import { AppContext } from "./context/AppContext";

import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getApp } from "firebase/app";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const s = {
  root: {
    display: "flex",
  },
  forms: {
    margin: "0 auto",
    width: "100%",
    textAlign: "center",
    padding: "1rem",
    display: "flex",
  },
  buttons: {
    display: "block",
    marginTop: "1rem",
  },
  file: {
    width: "50%",
    margin: "5% auto",
  },
  fileInput: {
    margin: "1% auto",
  },
  img: {
    width: "80%",
  },
  profile: {
    width: "50%",
    margin: "5% auto",
  },
  cards: {
    display: "flex",
    margin: "5% auto",
    width: "80%",
  },
  card: {
    width: "50%",
  },
};

const Profile = () => {
  const { app ,imageRef} = useContext(AppContext);
  const firebaseApp = getApp();
  const storage = getStorage(firebaseApp);

  const [preview, setPreview] = useState("");
  const [image, setImage] = useState("");

  const handleChangeFile = (event) => {
    const { files } = event.target;
    setImage(files[0].name);
    setPreview(window.URL.createObjectURL(files[0]));
  };
  const registHandler = (e) => {
    e.preventDefault();
    const mountainsRef = ref(storage, image);
    const mountainImagesRef = ref(storage, image);
    uploadBytes(mountainsRef, preview).then((snapshot) => {
      // console.log(snapshot);
    });
  };

  return (
    <div style={s.root}>
      <Box autoComplete="off" sx={s.forms}>
        <div style={s.file}>
          <input
            type="file"
            placeholder="名前"
            onChange={handleChangeFile}
            style={s.fileInput}
          />
          <img src={preview} style={s.img} />
        </div>
        <div style={s.profile}>
          <div style={{ margin: "10%" }}>
            <TextField
              id="standard-basic"
              label="ユーザーネーム"
              variant="standard"
              value="春　太郎"
              sx={{ width: "60%" }}
            />
          </div>
          <div style={{ margin: "10%" }}>
            <TextField
              id="standard-basic"
              label="メールアドレス"
              variant="standard"
              value="hal@ac.jp"
              sx={{ width: "60%" }}
            />
          </div>
          <div style={s.cards}>
            <Card sx={s.card}>
              <CardContent>
                <Typography variant="h6" component="div">
                  ともだち
                </Typography>
                <Typography color="text.secondary">29</Typography>
              </CardContent>
            </Card>
            <Card sx={s.card}>
              <CardContent>
                <Typography variant="h6" component="div">
                  アルバム数
                </Typography>

                <Typography color="text.secondary">10</Typography>
              </CardContent>
            </Card>
          </div>
          <Stack
            spacing={2}
            direction="row"
            sx={s.buttons}
            onClick={registHandler}
          >
            <Button variant="outlined" type="submit">
              編集
            </Button>

          </Stack>
        </div>
      </Box>
    </div>
  );
};

export default Profile;
