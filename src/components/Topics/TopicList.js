import styles from "./TopicList.module.css";
import React, { useEffect, useState } from "react";
import { getTopics } from "../api/api";
import Loading from "../Loading";
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

  if (loading) return <Loading />;
  return (
    <section className={styles.TopicList}>
      <h2>Click a link to see all articles of a given topic</h2>
      {topicList.map((topic) => {
        return <TopicCard topic={topic} key={topic.slug} />;
      })}
    </section>
  );
}
