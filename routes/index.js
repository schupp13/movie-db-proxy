const express = require("express");
const configurationRouter = require("./config")
const networkRouter = require("./network/index");
const trendingRouter = require("./trending/index");
const movieRouter = require("./movie/index");

const prefix = 'proxy'

module.exports = function(app) {
    // Configuration router
    app.use(`/${prefix}/configuration`,configurationRouter);
    // Movies, TvShows and Persons
    app.use(`/${prefix}/movie`, movieRouter);
    // Network Details, Images and Alternative Names
    app.use(`/${prefix}/network`, networkRouter);
    // Trending  Movies, TvShows and Persons
    app.use(`/${prefix}/trending`, trendingRouter);
  };