import React from "react";
import TopicPage from "../../Pages/TopicsPage/TopicPage";
import ReactData from "./react.json";

const ReactFunction = () => {
  return (
    <div style={{ height: "100%", overflow: "scroll" }}>
      <TopicPage jsonData={ReactData["React Topics"]} title="React" />
    </div>
  );
};

export default ReactFunction;
