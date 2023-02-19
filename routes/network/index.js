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

// 
router.get('/:id', cache('1440 minutes'), async(req, res) => {
    try{
        const params = new URLSearchParams({api_key: API_KEY, ...url.parse(req.url, true).query})
        const response = await needle('get', `${API_BASE_URL}/network/${req.params.id}?${params}`)
        res.status(200).json(response.body)
        
    }catch(e){
        res.status(500).json({e})
    }
   
});
// Alternative Names for networks
router.get('/:id/alternative_names', cache('1440 minutes'), async(req, res) => {
    try{
        const params = new URLSearchParams({api_key: API_KEY, ...url.parse(req.url, true).query})
        const response = await needle('get', `${API_BASE_URL}/network/${req.params.id}/alternative_names?${params}`)
        res.status(200).json(response.body)
        
    }catch(e){
        res.status(500).json({e})
    }
   
});
// Images for Networks
router.get('/:id/images', cache('1440 minutes'), async(req, res) => {
    try{
        const params = new URLSearchParams({api_key: API_KEY, ...url.parse(req.url, true).query})
        const response = await needle('get', `${API_BASE_URL}/network/${req.params.id}/images?${params}`)
        res.status(200).json(response.body)
        
    }catch(e){
        res.status(500).json({e})
    }
   
});
module.exports = router