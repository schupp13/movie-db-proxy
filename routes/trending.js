const { response } = require("express");
const url = require("url")
const express = require("express");
const router = express.Router();
const needle = require("needle");
const apicache = require("apicache")



const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY = process.env.API_KEY;
// init cache
let cache = apicache.middleware;

router.get('/movie/week', cache('60 minutes'), async(req, res) => {
    console.log(req.params)
    try{
        URL
        const params = new URLSearchParams({api_key: API_KEY, ...url.parse(req.url, true).query})
        const response = await needle('get', `${API_BASE_URL}/trending/movie/week?${params}`)
        res.status(200).json(response.body)
        
    }catch(e){
        console.log(e);
    }
   
});
router.get('/movie/day', cache('60 minutes'), async(req, res) => {
    console.log(req.params)
    try{
        URL
        const params = new URLSearchParams({api_key: API_KEY, ...url.parse(req.url, true).query})
        const response = await needle('get', `${API_BASE_URL}/trending/movie/week?${params}`)
        res.status(200).json(response.body)
        
    }catch(e){
        console.log(e);
    }
   
})
module.exports = router