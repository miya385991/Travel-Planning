import  React,{useContext} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";

import { AppContext } from "./context/AppContext";

  import { getStorage, ref } from "firebase/storage";
import { initializeApp, getApp } from "firebase/app";


export default function ProjectCard({project}) {
  const { title, startPlan, endPlan, image } = project;
  const navigate = useNavigate();
  const id = 1;



  return (
    <Card sx={{ width: "20%", margin: "2%" }}>
      <CardMedia
        component="img"
        height="100"
        image={process.env.PUBLIC_URL + `/image/${image}`}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {startPlan} 〜 {endPlan}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => navigate(`./${id}`)}>
          アルバムを開く
        </Button>
      </CardActions>
    </Card>
  );
}
