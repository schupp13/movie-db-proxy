const express = require("express");
const cors = require("cors");
const rateLimit = require('express-rate-limit')
require("dotenv").config();


const PORT = process.env.PORT || 5000;


const app = express();

const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 30
})
app.use(limiter);
// load my routes
require("./routes")(app)
app.use(cors());


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));