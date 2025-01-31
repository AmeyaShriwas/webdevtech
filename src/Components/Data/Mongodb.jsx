import React from "react";
import TopicPage from "../../Pages/TopicsPage/TopicPage";
import MongodbData from "./mongodb.json";

const MongoDB = () => {
  return (
    <div style={{ height: "100%", overflow: "scroll" }}>
      <TopicPage jsonData={MongodbData["MongoDB Topics"]} title="Mongodb" />
    </div>
  );
};

export default MongoDB;
