import React from "react";
import TopicPage from "../../Pages/TopicsPage/TopicPage";
import NextjsData from "./nextjs.json";

const Nextjs = () => {
  return (
    <div style={{ height: "100%", overflow: "scroll" }}>
      <TopicPage jsonData={NextjsData["Nextjs Topics"]} title="Nextjs" />
    </div>
  );
};

export default Nextjs;
