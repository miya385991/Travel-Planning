import React from 'react'
import ProjectCard from './ProjectCard'
import RegistTableList from './RegistTableList'

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";

const s = {

  root: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",

  }
}

const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];


const project = [
  {
    id: 1,
    name: "青森旅行",
    date: "1月22日〜1月24日",
    image: "/image/aomori.jpeg",
  },
  {
    id: 2,
    name: "北海道旅行",
    date: "1月22日〜1月24日",
    image: "/image/hokkaidou.jpeg",
  },
  {
    id: 3,
    name: "島根旅行",
    date: "1月22日〜1月24日",
    image: "/image/simane.jpeg",
  },
  {
    id: 4,
    name: "大阪旅行",
    date: "1月22日〜1月24日",
    image: "/image/osaka.jpeg",
  },
  {
    id: 5,
    name: "岐阜旅行",
    date: "1月22日〜1月24日",
    image: "/image/gihu.jpeg",
  },
  {
    id: 6,
    name: "京都旅行",
    date: "1月22日〜1月24日",
    image: "/image/kyouto.jpeg",
  },
  {
    id: 7,
    name: "東京旅行",
    date: "1月22日〜1月24日",
    image: "/image/toukyou.jpeg",
  },
  {
    id: 8,
    name: "ディズニーランド",
    date: "1月22日〜1月24日",
    image: "/image/dhizuni.jpeg",
  },
  {
    id: 9,
    name: "卒業旅行",
    date: "1月22日〜1月24日",
    image: "/image/sotugyou.jpeg",
  },
  {
    id: 10,
    name: "夏休み旅行",
    date: "1月22日〜1月24日",
    image: "/image/natuyasumi.jpeg",
  },

];

const Project = () => {
  return (
    <div style={s.root}>
      <Box sx={{ width: "90%", height: "100%", textAlign: "right" }}>
        <IconButton aria-label="アルバム作成">
          <AddCircleOutlineTwoToneIcon
            label="アルバム作成"
            sx={{ fontSize: "3rem", color: "#34f" }}
          />
        </IconButton>
      </Box>
      {project.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  );
}

export default Project