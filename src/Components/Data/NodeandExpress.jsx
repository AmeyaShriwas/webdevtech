import React from "react";
import TopicPage from "../../Pages/TopicsPage/TopicPage";
import NodeandExpressData from "./nodeandexpress.json";

const NodeandExpressFuntion = () => {
  return (
    <div style={{ height: "100%", overflow: "scroll" }}>
      <TopicPage
        jsonData={NodeandExpressData["Node and Express Topics"]}
        title="Node and Express js"
      />
    </div>
  );
};

export default NodeandExpressFuntion;
