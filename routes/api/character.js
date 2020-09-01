//Express Server
const express = require('express');
const router = express.Router();
//Packages
const axios = require('axios');
const md5 = require('md5');
//Declarations for the needed hash described in documentation
const publicKey = '540f9d60e73b2d4db9fc08aaae0c89b4';
require('dotenv').config();

//Random Character offset
const randomOffset = require('../../middleware/randomChar');

//Comic Id getter
const comicId = require('../../middleware/getComicId');

//Route @GET CHARACTER By Name FOR THE SEARCH ROUTE
//Request Parameters: name, namestartswith,modifiedsince,comics,series,events,stories,orderby
router.post('/character', async (req, res) => {
  //Config Variables
  console.log(req.body.input, 'im your body');
  let name = req.body.input;
  let ts = new Date().getTime();
  let str = ts.toString() + process.env.MARVEL_KEY_PRIVATE + publicKey;
  let hash = md5(str);
  //Request Variables
  let char = req.body.char;
  let limit = req.body.limit;
  let offset = req.body.offset;
  let skip = req.body.skip;
  const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  try {
    const response = await axios.get(url);
    console.log(response.data);
    return res.send(response.data);
  } catch (e) {
    return res.end({ error: e.message });
  }
});

//Route @GET CHARACTER By Id FOR THE FAVORITES ROUTE
//Request Parameters: name, namestartswith,modifiedsince,comics,series,events,stories,orderby
router.get('/characterid/:id', async (req, res) => {
  //Config Variables
  let id = req.params.id;
  if (req.params.id === '') {
    id = req.body.id;
  }

  let ts = new Date().getTime();
  let str = ts.toString() + process.env.MARVEL_KEY_PRIVATE + publicKey;
  let hash = md5(str);

  //Request Variables
  let char = req.body.char;
  let limit = req.body.limit;
  let offset = req.body.offset;
  let skip = req.body.skip;
  const url = `https://gateway.marvel.com:443/v1/public/characters?id=${id}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  try {
    const response = await axios.get(url);
    return res.send(response.data);
  } catch (e) {
    return res.send({ error: e.message });
  }
});

//Route @GET RANDOM CHARACTER
// NO REQUEST PARAMETERS RETURNS RANDOM CHARACTER
router.get('/', async (req, res) => {
  //Config Variables
  let ts = new Date().getTime();
  let str = ts.toString() + process.env.MARVEL_KEY_PRIVATE + publicKey;
  let hash = md5(str);
  let offset = randomOffset();
  let date = new Date('1940-1-1');
  //Request Variables
  const url = `https://gateway.marvel.com:443/v1/public/characters?modifiedSince=${date}&offset=${offset}&ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=8`;
  try {
    const response = await axios.get(url);
    return res.send(response.data.data.results);
    // return res.send(data.results);
  } catch (e) {
    return res.send({ error: e.message });
  }
});

//Tested for:  'http://gateway.marvel.com/v1/public/comics/17752'
//http://gateway.marvel.com/v1/public/comics/16897.jpg Example of comic
//Route @GET FOR GETTING COMIC INFORMATION USING COMIC'S ID
router.get('/comic', async (req, res) => {
  //Config Variables
  // let id = req.body.id;
  //data.results.title data.results.description data.results.thumnbnail.path + string to select the type of img
  let ts = new Date().getTime();
  let str = ts.toString() + process.env.MARVEL_KEY_PRIVATE + publicKey;
  let hash = md5(str);
  let date = new Date('1940-1-1');
  let id = comicId('http://gateway.marvel.com/v1/public/comics/17752');
  let url = `https://gateway.marvel.com:443/v1/public/comics?&id=${id}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  try {
    const response = await axios.get(url);
    return res.send(response.data.data);
  } catch (e) {
    return res.send({ error: e.message });
  }
});

//Tested for:  'https://gateway.marvel.com:443/v1/public/characters/1010351/comics?orderBy=onsaleDate&limit=20&apikey=540f9d60e73b2d4db9fc08aaae0c89b4'
//http://gateway.marvel.com/v1/public/comics/16897.jpg
//Route @GET FOR GETTING LIST OF COMICS OF A CHARACTER
router.get('/character/comics', async (req, res) => {
  //Config Variables
  console.log(req.body, 'im the body dude');
  let id = req.body.id;
  let ts = new Date().getTime();
  let str = ts.toString() + process.env.MARVEL_KEY_PRIVATE + publicKey;
  let hash = md5(str);
  let limit = '';
  let url = `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?orderBy=onsaleDate&limit=10&ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  try {
    const response = await axios.get(url);
    //take .id, .description, http://i.annihil.us/u/prod/marvel/i/mg/c/20/5d1f6b2c41a9e/standard_medium.jpg  thumbnail+ /standard_medium.jpg
    return res.send(response.data.data.results);
    return res.send(dumData);
  } catch (e) {
    return res.send({ error: e.message });
  }
});

//
module.exports = router;
