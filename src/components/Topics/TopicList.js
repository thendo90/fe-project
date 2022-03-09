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
    <div className="topic__list">
      <h3>Click to see all articles of a given topic</h3>
      <dt>Displaying {topicList.length} topics</dt>
      {topicList.map((topic) => {
        return <TopicCard topic={topic} />;
      })}
    </div>
  );
}
