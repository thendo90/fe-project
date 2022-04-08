# NC News Front End ([Deployed app](https://toms-nc-news-api.netlify.app/))

## Summary

This app is a react based front-end for my back-end project - a news aggregation API built using Express and PSQL (which can be found [here](https://github.com/thendo90/hosting-nc-news-api))

To get started, navigate to the directory where you wish to clone the app and run the following in the CLI:

```
git clone https://github.com/thendo90/fe-project.git
cd fe-project
npm i
```

You can then run the app on localhost at any time using:

```
npm start
```

The minimum version of Node.js which I can endorse for running this project is v17.2.0

## Pending features

Some features left to add are:

- a users section with user cards - each linking to a user profile which shows all the articles written by that user
- handling log-in / log-out (currently hardcoded to be logged in as tickle122)
- an account page
- the ability to post an article
- the ability to patch an article
- the ability to delete an article
- the ability to patch a comment

## Built with

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Axios](https://axios-http.com/) - Promise based HTTP client for the browser and node.js
- [Icons made by Freepik](https://www.flaticon.com/authors/freepik)
