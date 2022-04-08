import styles from "./UserList.module.css";
import React, { useEffect, useState } from "react";
import { getUsers } from "../api/api";
import Loading from "../Loading";
import UserCard from "./UserCard";

export default function UserList() {
  const [userList, setUsers] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers().then(({ users }) => {
      setUsers(users);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loading />;
  return (
    <section className={styles.UserList}>
      {userList.map((user) => {
        return <UserCard user={user} key={user.username} />;
      })}
    </section>
  );
}
