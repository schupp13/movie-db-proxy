const express = require("express");
const trendingRouter = require("./trending");

module.exports = function(app) {
    app.use(express.json());
  
    app.use("/proxy/trending", trendingRouter);

  };