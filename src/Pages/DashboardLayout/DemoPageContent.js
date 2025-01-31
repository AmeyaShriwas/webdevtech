import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import Courseoverview from "../../Components/Data/Courseoverview";
import Htmlcss from "../../Components/Data/Htmllcss";
import Css from './../../Components/Data/Css.jsx'
import Javascript from "../../Components/Data/Javascript.jsx";
import ReactFunction from "../../Components/Data/React.jsx";
import NodeandExpressFuntion from "../../Components/Data/NodeandExpress.jsx";
import MongoDB from "../../Components/Data/Mongodb.jsx";
import Mysql from "../../Components/Data/Mysql.jsx";
import Nextjs from "../../Components/Data/Nextjs.jsx";
import ReactNative from "../../Components/Data/ReactNative.jsx";

function DemoPageContent({ selectedPage }) {

  // Render content based on selected tab
  const renderContent = () => {
    switch (selectedPage) {
      case "/html":
        return <Htmlcss />;
      case "/css":
        return <Css />;
      case "/javascript":
        return <Javascript />;
      case "/react":
        return <ReactFunction />;
      case "/node-express":
        return <NodeandExpressFuntion />;
      case "/mongodb":
        return <MongoDB />;
      case "/mysql":
        return <Mysql />;
      case "/nextjs":
        return <Nextjs />;
        case "/react-native":
          return <ReactNative/>
      case "/course-overview":
        return <Courseoverview />;
      default:
        return <Courseoverview />;
    }
  };

  return renderContent();
}

export default DemoPageContent;
