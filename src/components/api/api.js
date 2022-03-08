import axios from "axios";

export function getArticles(query) {
  let params;
  if (query !== undefined) {
    params = { p: query.p };
  }
  return axios
    .get("https://toms-nc-news-api.herokuapp.com/api/articles", { params })
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
