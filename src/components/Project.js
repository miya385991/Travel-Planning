import React, { useContext, useEffect } from "react";
import ProjectCard from './ProjectCard'
import RegistTableList from './RegistTableList'
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";


import { AppContext } from "./context/AppContext";

const s = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",

  }
}



const Project = () => {

  const { getDB, db, user } = useContext(AppContext);

    useEffect(() => {
      console.log("レンダリングしました");
      getDB(db, "plants");
    }, []);




  return (
    <div style={s.root}>
      <Box sx={{ width: "90%", height: "100%", textAlign: "right" }}>
        <Link to="/project/plan">
          <IconButton aria-label="アルバム作成">
            <AddCircleOutlineTwoToneIcon
              label="アルバム作成"
              sx={{ fontSize: "3rem", color: "#34f" }}
            />
          </IconButton>
        </Link>
      </Box>

      {user.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  );
}

export default Project