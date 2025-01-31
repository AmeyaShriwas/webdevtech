import React from "react";
import TopicPage from "../../Pages/TopicsPage/TopicPage";
import ReactNativeData from "./reactnative.json";

const ReactNative = () => {
  return (
    <div style={{ height: "100%", overflow: "scroll" }}>
      <TopicPage
        jsonData={ReactNativeData["React Native Topics"]}
        title="React Native"
      />
    </div>
  );
};

export default ReactNative;
