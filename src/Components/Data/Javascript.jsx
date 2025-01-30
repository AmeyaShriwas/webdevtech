import React from "react";
import TopicPage from "../../Pages/TopicsPage/TopicPage";
import JavascriptData from './js.json'

const Javascript = () => {
  return (
    <div style={{ height: "100%", overflow: "scroll" }}>
      <TopicPage
        jsonData={JavascriptData["JavaScript Topics"]}
        title="Javascript"
      />
    </div>
  );
};

export default Javascript;
