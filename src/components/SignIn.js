import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useCookies } from "react-cookie";

import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const s = {
  root: {
    padding: "10%",
  },
  textField: {
    width: "100%",
  },
};

const Signin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(["uid"]);
  const navigate = useNavigate();

    const signInUser = async () => {
      const auth = getAuth();
      try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        const user = await res.user;
        if (user) {
          const uid = user.uid;
          setCookie("uid", uid);
          navigate("/map");
        }

      } catch (error) {
        console.log(error.code);
        console.log(error.message);
      }
    };

  return (
    <div style={s.root}>
      <Card sx={{ width: "50%", height: "50vh", margin: "auto" }}>
        <h1>サインイン</h1>
        <CardContent>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidat
            autoComplete="off"
          >
            <div style={s.textField}>
              <TextField
                sx={{ width: "80%" }}
                id="outlined-basic"
                label="メールアドレス"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div style={s.textField}>
              <TextField
                sx={{ width: "80%" }}
                id="filled-basic"
                label="パスワード"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </Box>
        </CardContent>
        <CardActions
          sx={{ width: "50%", margin: "auto", paddingBottom: "1rem" }}
        >
          <Button
            variant="contained"
            sx={{ width: "100%" }}
            onClick={signInUser}
          >
            登録
          </Button>
        </CardActions>
        <CardActions
          sx={{ width: "50%", margin: "auto", paddingBottom: "1rem" }}
        >
          <Link to="/" style={{ width: "100%" }}>
            新規作成はこちら
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default Signin;
