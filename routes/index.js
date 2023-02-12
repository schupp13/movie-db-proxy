const express = require("express");
// network
// network router
const networkRouter = require("./network/index");
// trending router
const trendingRouter = require("./trending/index");



const prefix = 'proxy'

module.exports = function(app) {
    // Network Details, Images and Alternative Names
    app.use(`/${prefix}/network`, networkRouter);
    // Trending  Movies, TvShows and Persons
    app.use(`/${prefix}/trending`, trendingRouter);

    console.log("HELLLOE");
  };