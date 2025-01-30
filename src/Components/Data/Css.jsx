import React from "react";
import cssData from "./css.json";
import TopicPage from "../../Pages/TopicsPage/TopicPage";

const Css = () => {
  return (
    <div style={{ height: "100%", overflow: "scroll" }}>
  
      <TopicPage jsonData={cssData["CSS Topics"]} title="CSS" />
    </div>
  );
};

export default Css;
