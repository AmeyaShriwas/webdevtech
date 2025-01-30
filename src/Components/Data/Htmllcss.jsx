import React from 'react'
import htmlData from "./html.json"; // Assuming you have a separate JSON file for HTML topics
import TopicPage from '../../Pages/TopicsPage/TopicPage';

const Htmllcss = () => {
  return (
    <div style={{height: '100%', overflow:'scroll'}}>
      <TopicPage jsonData={htmlData["HTML Topics"]} title="HTML" />

     
    </div>
  );
}

export default Htmllcss
