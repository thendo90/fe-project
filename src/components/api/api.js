import axios from "axios";

const api = axios.create({
  baseURL: "https://toms-nc-news-api.herokuapp.com/api",
});

export function getArticles(query) {
  return api
    .get("/articles", {
      params: query,
    })
    .then(({ data }) => {
      return data;
    });
}

export function getArticleById(id) {
  return api.get(`/articles/${id}`).then(({ data }) => {
    return data;
  });
}

export function getTopics() {
  return api.get("/topics").then(({ data }) => {
    return data;
  });
}

export function patchArticleVote(id, votes) {
  return api
    .patch(`/articles/${id}`, {
      inc_votes: votes,
    })
    .then(({ data }) => {
      return data;
    });
}

export function getCommentsById(id) {
  return api.get(`/articles/${id}/comments?limit=100`).then(({ data }) => {
    return data;
  });
}

export function patchCommentVote(id, votes) {
  return api
    .patch(`/comments/${id}`, {
      inc_votes: votes,
    })
    .then(({ data }) => {
      return data;
    });
}

export function makeComment(id, { username, body }) {
  return api
    .post(`/articles/${id}/comments`, {
      username,
      body,
    })
    .then(({ data }) => {
      return data;
    });
}

export function deleteComment(id) {
  return api.delete(`/comments/${id}`);
}

export function getUsers() {
  return api.get(`/users`).then(({ data }) => {
    return data;
  });
}
