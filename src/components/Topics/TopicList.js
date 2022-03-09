import React, { useEffect, useState } from "react";
import { getTopics } from "../api/api";
import TopicCard from "./TopicCard";

export default function TopicList() {
  const [topicList, setTopics] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTopics().then(({ topics }) => {
      setTopics(topics);
      setLoading(false);
    });
  }, []);

  if (loading) return <h1 className="loading">loading content</h1>;
  return (
    <div className="TopicList">
      <h3>Click to see all articles of a given topic</h3>
      <p>Displaying {topicList.length} topics</p>
      {topicList.map((topic) => {
        return <TopicCard topic={topic} />;
      })}
    </div>
  );
}
