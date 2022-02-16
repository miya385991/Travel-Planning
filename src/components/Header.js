import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const s = {
  root: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "#6266DB",
  },
  headerField: {
    display: "flex",
    justifyContent: "space-between",
    width: "30%",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  title: {
    color: "white",
    textDecoration: "none",
    fontSize: "2rem",
    fontWeight: "bold",
  },
  logout: {
    backgroundColor: "#f50057",
    margin: "0.5rem",
  },

};

const Header = () => {
  const navigation = useNavigate();
  return (
    <Box>
      <AppBar position="static">
        <div style={s.root}>
          <Toolbar style={s.headerField}>
            <Typography variant="h6" component="div">
              <Link to="/map" style={s.title}>
                旅オリ
              </Link>
            </Typography>
            <Link to="/map" style={s.link}>
              マップ
            </Link>
            <Link to="/project" style={s.link}>
               アルバム
            </Link>
          </Toolbar>
          <Toolbar>
            <Link to="profile" style={s.link}>
              プロフィールへ
            </Link>
            <Button variant="contained" sx={s.logout} onClick={()=>navigation('/')}>
              ログアウト
            </Button>
          </Toolbar>
        </div>
      </AppBar>
    </Box>
  );
};

export default Header;
