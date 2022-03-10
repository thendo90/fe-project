import axios from "axios";

export function getArticles(query) {
  return axios
    .get("https://toms-nc-news-api.herokuapp.com/api/articles", {
      params: query,
    })
    .then(({ data }) => {
      return data;
    });
}

export function getArticleById(id) {
  return axios
    .get(`https://toms-nc-news-api.herokuapp.com/api/articles/${id}`)
    .then(({ data }) => {
      return data;
    });
}

export function getTopics() {
  return axios
    .get("https://toms-nc-news-api.herokuapp.com/api/topics")
    .then(({ data }) => {
      return data;
    });
}

export function patchArticleVote(id, votes) {
  return axios
    .patch(`https://toms-nc-news-api.herokuapp.com/api/articles/${id}`, {
      inc_votes: votes,
    })
    .then(({ data }) => {
      return data;
    });
}

export function getCommentsById(id) {
  return axios
    .get(
      `https://toms-nc-news-api.herokuapp.com/api/articles/${id}/comments?limit=50`
    )
    .then(({ data }) => {
      return data;
    });
}

export function patchCommentVote(id, votes) {
  console.log(id, votes);
  return axios
    .patch(`https://toms-nc-news-api.herokuapp.com/api/comments/${id}`, {
      inc_votes: votes,
    })
    .then(({ data }) => {
      return data;
    });
}
