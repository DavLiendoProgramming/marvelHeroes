//Express Server
const express = require('express');
const router = express.Router();

//Packages
const axios = require('axios');
const md5 = require('md5');

//Declarations for the needed hash described in documentation
const publicKey = '540f9d60e73b2d4db9fc08aaae0c89b4';
require('dotenv').config();

//Route @GET CHARACTERS
//Response Parameters: name, namestartswith,modifiedsince,comics,series,events,stories,orderby
//Test URL : https://gateway.marvel.com/v1/public/characters?name=wolverine&apikey=540f9d60e73b2d4db9fc08aaae0c89b4&hash=d4bcfe9cdbaef7ce0dcc778f514c2cfd&ts=1598459422606
router.get('/', async (req, res) => {
  let ts = new Date().getTime();
  let str = ts.toString() + process.env.MARVEL_KEY_PRIVATE + publicKey;
  let hash = md5(str);
  let char = req.body.char;
  let limit = req.body.limit;
  let offset = req.body.offset;
  let skip = req.body.skip;
  const url = `https://gateway.marvel.com:443/v1/public/characters?name=wolverine&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  // const config = { method: 'get', url: url, headers: {} };
  try {
    const response = await axios.get(url);
    console.log(response);
    return res.send(response.data);
  } catch (e) {
    return res.send({ error: e.message });
  }
});

module.exports = router;
