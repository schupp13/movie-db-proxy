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

router.get('/:id/', cache('1440 minutes'), async(req, res) => {
  
    try{
        const params = new URLSearchParams({api_key: API_KEY, ...url.parse(req.url, true).query})
        const response = await needle('get', `${API_BASE_URL}/movie/${req.params.id}?${params}`)
        res.status(200).json(response.body)
        
    }catch(e){
       res.status(500).json({e})
    }
   
});
router.get('/:id/videos', cache('1440 minutes'), async(req, res) => {
  
    try{
        const params = new URLSearchParams({api_key: API_KEY, ...url.parse(req.url, true).query})
        const response = await needle('get', `${API_BASE_URL}/movie/${req.params.id}/videos?${params}`)
        res.status(200).json(response.body)
        
    }catch(e){
       res.status(500).json({e})
    }
   
});
module.exports = router