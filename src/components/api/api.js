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

// export function getArticlesByTopic(topic) {
//   return axios
//     .get("https://toms-nc-news-api.herokuapp.com/api/articles", {
//       params: { topic },
//     })
//     .then(({ data }) => {
//       return data;
//     });
// }
