import React from "react";
import TopicPage from "../../Pages/TopicsPage/TopicPage";
import MysqlData from "./mysql.json";

const Mysql = () => {
  return (
    <div style={{ height: "100%", overflow: "scroll" }}>
      <TopicPage jsonData={MysqlData["MySQL Topics"]} title="Mysql" />
    </div>
  );
};

export default Mysql;
