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

//Route @GET CHARACTER
//Request Parameters: name, namestartswith,modifiedsince,comics,series,events,stories,orderby
router.get('/character', async (req, res) => {
  //Config Variables
  let ts = new Date().getTime();
  let str = ts.toString() + process.env.MARVEL_KEY_PRIVATE + publicKey;
  let hash = md5(str);

  //Request Variables
  let char = req.body.char;
  let limit = req.body.limit;
  let offset = req.body.offset;
  let skip = req.body.skip;
  const url = `https://gateway.marvel.com:443/v1/public/characters?name=wolverine&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  try {
    const response = await axios.get(url);
    console.log(response);
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
  let data = {
    results: [
      {
        id: 1011131,
        name: 'Hawkeye (Ultimate)',
        description: '',
        modified: '2014-03-05T13:26:13-0500',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/03/53176be145914',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011131',
        comics: {
          available: 30,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011131/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/36129',
              name: 'Ultimate Avengers Vs. New Ultimates (2011) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/26825',
              name: 'Ultimate Avengers (2009) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/30598',
              name: 'Ultimate Avengers 3 (2010) #5',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/38503',
              name:
                'Ultimate Avengers Vs. New Ultimates (2011) #2 (HITCH VARIANT)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/30209',
              name: 'Ultimate Comics Enemy (2010) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/38950',
              name: 'Ultimate Comics Hawkeye (2011) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/38951',
              name: 'Ultimate Comics Hawkeye (2011) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/38944',
              name: 'Ultimate Comics Hawkeye (2011) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/38943',
              name: 'Ultimate Comics Hawkeye (2011) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/30600',
              name: 'Ultimate Comics New Ultimates (2010) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/30602',
              name: 'Ultimate Comics New Ultimates (2010) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/38687',
              name: 'Ultimate Comics Ultimates (2011) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/38689',
              name: 'Ultimate Comics Ultimates (2011) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/38686',
              name: 'Ultimate Comics Ultimates (2011) #7',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/2407',
              name: 'Ultimate Secret (2005) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/18474',
              name: 'Ultimate War (2003) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/18476',
              name: 'Ultimate War (2003) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/18477',
              name: 'Ultimate War (2003) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/1158',
              name: 'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB (Trade Paperback)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/2158',
              name: 'Ultimates 2 (2004) #7',
            },
          ],
          returned: 20,
        },
        series: {
          available: 14,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011131/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/8498',
              name: 'Ultimate Avengers (2009 - 2010)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/9867',
              name: 'Ultimate Avengers 3 (2010 - 2011)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/12615',
              name: 'Ultimate Avengers Vs. New Ultimates (2011)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/9196',
              name: 'Ultimate Comics Enemy (2010)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/14068',
              name: 'Ultimate Comics Hawkeye (2011)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/9026',
              name: 'Ultimate Comics New Ultimates (2010 - 2011)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/13936',
              name: 'Ultimate Comics Ultimates (2011 - 2013)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/838',
              name: 'Ultimate Secret (2005)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3659',
              name: 'Ultimate War (2003)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/216',
              name: 'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB (1999)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/709',
              name: 'Ultimates 2 (2004 - 2006)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2422',
              name: 'ULTIMATES 2 VOL. 2: GRAND THEFT AMERICA TPB (2007)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3188',
              name: 'Ultimates 3 (2007 - 2008)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/7515',
              name:
                'Ultimates 3: Who Killed the Scarlet Witch? (2009 - Present)',
            },
          ],
          returned: 14,
        },
        stories: {
          available: 39,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011131/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2735',
              name: 'ULTIMATES 2 (2004) #7',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2749',
              name: '6 of 6 - Grand Theft America',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/4312',
              name: '4 of 4 - 4XLS',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/8131',
              name: '6 of 6 - Grand Theft America',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/36428',
              name: 'Sex, Lies, and DVDs 1 of 5',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/36430',
              name: 'Ultimates 3 (2007) #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/36431',
              name: 'Sex, Lies, and DVDs 1 of 5',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/36864',
              name: 'Ultimates 3 (2007) #2',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/36865',
              name: 'Sex, Lies, and DVDs 2 of 5',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/36866',
              name: 'Ultimates 3 (2007) #2',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/36867',
              name: 'Sex, Lies, and DVDs 2 of 5',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/39348',
              name: 'Interior #39348',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/39354',
              name: 'Interior #39354',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/39357',
              name: 'Interior #39357',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/44308',
              name: 'Ultimates 3 (2007) #3',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/44309',
              name: 'Sex, Lies, and DVDs 3 of 5',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/44588',
              name: 'Ultimates 3 (2007) #4',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/44589',
              name: 'Interior #44589',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/58961',
              name: 'ULTIMATE COMICS AVENGERS (2009) #2',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/59157',
              name: 'Ultimates 3 (2007) #5',
              type: 'cover',
            },
          ],
          returned: 20,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011131/events',
          items: [],
          returned: 0,
        },
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/characters/23/hawkeye?utm_campaign=apiRef&utm_source=540f9d60e73b2d4db9fc08aaae0c89b4',
          },
          {
            type: 'wiki',
            url:
              'http://marvel.com/universe/Hawkeye_(Ultimate)?utm_campaign=apiRef&utm_source=540f9d60e73b2d4db9fc08aaae0c89b4',
          },
          {
            type: 'comiclink',
            url:
              'http://marvel.com/comics/characters/1011131/hawkeye_ultimate?utm_campaign=apiRef&utm_source=540f9d60e73b2d4db9fc08aaae0c89b4',
          },
        ],
      },
      {
        id: 1017108,
        name: 'Hawkeye/Clint Barton (MAA)',
        description:
          'Hawkeye is an expert archer with an attitude just as on-target as his aim. His stealth combat experience and his ability to hit any target with any projectile make him a valuable member of the Avengers. However, he refuses to let things get too serious, as he has as many jokes as he does arrows!',
        modified: '2013-09-18T15:48:47-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/4/03/5232198a81c17',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1017108',
        comics: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1017108/comics',
          items: [],
          returned: 0,
        },
        series: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1017108/series',
          items: [],
          returned: 0,
        },
        stories: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1017108/stories',
          items: [],
          returned: 0,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1017108/events',
          items: [],
          returned: 0,
        },
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/characters/23/hawkeye?utm_campaign=apiRef&utm_source=540f9d60e73b2d4db9fc08aaae0c89b4',
          },
          {
            type: 'comiclink',
            url:
              'http://marvel.com/comics/characters/1017108/hawkeyeclint_barton_maa?utm_campaign=apiRef&utm_source=540f9d60e73b2d4db9fc08aaae0c89b4',
          },
        ],
      },
      {
        id: 1010351,
        name: 'Hellcat (Patsy Walker)',
        description: '',
        modified: '2011-03-07T13:02:34-0500',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/30/4d751d6b1bc7d',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010351',
        comics: {
          available: 85,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1010351/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17751',
              name: 'Avengers (1996) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17756',
              name: 'Avengers (1996) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17757',
              name: 'Avengers (1996) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17758',
              name: 'Avengers (1996) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17760',
              name: 'Avengers (1996) #6',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17761',
              name: 'Avengers (1996) #7',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17762',
              name: 'Avengers (1996) #8',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17763',
              name: 'Avengers (1996) #9',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17491',
              name: 'Avengers (1998) #10',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17492',
              name: 'Avengers (1998) #11',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17509',
              name: 'Avengers (1998) #27',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/7002',
              name: 'Avengers (1963) #144',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/7006',
              name: 'Avengers (1963) #148',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/7007',
              name: 'Avengers (1963) #149',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/7009',
              name: 'Avengers (1963) #150',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/7010',
              name: 'Avengers (1963) #151',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/7190',
              name: 'Avengers (1963) #313',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/20627',
              name: 'Avengers Annual (2000) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/1311',
              name: 'Avengers Assemble (Hardcover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/1795',
              name: 'Avengers Assemble Vol. 2 (Hardcover)',
            },
          ],
          returned: 20,
        },
        series: {
          available: 35,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1010351/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/354',
              name: 'Avengers (1998 - 2004)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
              name: 'Avengers (1963 - 1996)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3621',
              name: 'Avengers (1996 - 1997)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/26449',
              name: 'Avengers Annual (2000)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1340',
              name: 'Avengers Assemble (2004)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1496',
              name: 'Avengers Assemble Vol. 2 (2005)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1737',
              name: 'Avengers Assemble Vol. 3 (2006)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2111',
              name: 'Avengers Forever (1998 - 2001)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1441',
              name: 'Avengers: The Serpent Crown (2005)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3743',
              name: 'Defenders (1972 - 1986)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/22406',
              name: 'Defenders Epic Collection: Ashes, Ashes… (2017)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/27393',
              name: 'Fearless (2019)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/13065',
              name: 'Heralds (2010)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1813',
              name: 'Heroes Reborn: Avengers (2006)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1814',
              name: 'Heroes Reborn: Iron Man (2006)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/22580',
              name: 'Hulk (2016 - 2017)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/13577',
              name: 'Iron Man (1996 - 1998)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2815',
              name: 'Marvel Comics Presents (2007 - 2008)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2039',
              name: 'Marvel Comics Presents (1988 - 1995)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/8100',
              name: 'Marvel Divas (2009)',
            },
          ],
          returned: 20,
        },
        stories: {
          available: 86,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1010351/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/14541',
              name: 'AVENGERS (1963) #144',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/14549',
              name: 'AVENGERS (1963) #148',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/14551',
              name: 'AVENGERS (1963) #149',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/14555',
              name: 'AVENGERS (1963) #150',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/14557',
              name: 'AVENGERS (1963) #151',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/14920',
              name: 'AVENGERS (1963) #313',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/23296',
              name: 'Encounter In The Alley of Death',
              type: '',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/26205',
              name: 'Cover #26205',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/26213',
              name: 'Cover #26213',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/30959',
              name: 'Peril on a Subatomic Planet!',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/31578',
              name: 'The Sacrifice',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/33313',
              name: 'TBD',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/33315',
              name: 'TBD',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/34098',
              name: 'Industrial Revelation! (Industrial Revolution Part Two)',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/36148',
              name: 'Vanguard 3 of 12; Weapon Omega 3 of 12',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/36443',
              name: 'Vanguard 4 of 12; Weapon Omega 4 of 12',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37340',
              name: 'Pomp & Pageantry',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37341',
              name: 'Avengers (1998) #11',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37342',
              name: '...Always an Avenger!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37375',
              name: 'Avengers (1998) #27',
              type: 'cover',
            },
          ],
          returned: 20,
        },
        events: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1010351/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
              name: 'Acts of Vengeance!',
            },
          ],
          returned: 1,
        },
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/comics/characters/1010351/hellcat_patsy_walker?utm_campaign=apiRef&utm_source=540f9d60e73b2d4db9fc08aaae0c89b4',
          },
          {
            type: 'wiki',
            url:
              'http://marvel.com/universe/Hellcat_(Patricia_Hellstrom)?utm_campaign=apiRef&utm_source=540f9d60e73b2d4db9fc08aaae0c89b4',
          },
          {
            type: 'comiclink',
            url:
              'http://marvel.com/comics/characters/1010351/hellcat_patsy_walker?utm_campaign=apiRef&utm_source=540f9d60e73b2d4db9fc08aaae0c89b4',
          },
        ],
      },
      {
        id: 1014996,
        name: 'Hellfire Club (Ultimate)',
        description: '',
        modified: '2012-07-11T09:14:59-0400',
        thumbnail: {
          path:
            'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1014996',
        comics: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1014996/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/15715',
              name: 'Ultimate X-Men (2000) #24',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/15716',
              name: 'Ultimate X-Men (2000) #25',
            },
          ],
          returned: 2,
        },
        series: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1014996/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/474',
              name: 'Ultimate X-Men (2000 - 2009)',
            },
          ],
          returned: 1,
        },
        stories: {
          available: 4,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1014996/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/31885',
              name: 'Ultimate X-Men (2001) #25',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/31887',
              name: 'Hellfire and Brimstone Part 5',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/31896',
              name: 'Ultimate X-Men (2001) #24',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/31898',
              name: 'Hellfire and Brimstone Part 4',
              type: 'interiorStory',
            },
          ],
          returned: 4,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1014996/events',
          items: [],
          returned: 0,
        },
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/characters/943/hellfire_club?utm_campaign=apiRef&utm_source=540f9d60e73b2d4db9fc08aaae0c89b4',
          },
          {
            type: 'comiclink',
            url:
              'http://marvel.com/comics/characters/1014996/hellfire_club_ultimate?utm_campaign=apiRef&utm_source=540f9d60e73b2d4db9fc08aaae0c89b4',
          },
        ],
      },
      {
        id: 1011371,
        name: 'Henry Peter Gyrich',
        description: '',
        modified: '2014-04-29T14:23:23-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/c0/535fed9b1ae7f',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011371',
        comics: {
          available: 14,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011371/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/7055',
              name: 'Avengers (1963) #192',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/13489',
              name: 'Avengers: The Initiative (2007) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/16542',
              name: 'Avengers: The Initiative (2007) #6',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/16543',
              name: 'Avengers: The Initiative (2007) #7',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17397',
              name: 'Avengers: The Initiative (2007) #8',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17638',
              name: 'Avengers: The Initiative (2007) #9',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/20679',
              name: 'Avengers: The Initiative (2007) #10',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/20877',
              name: 'Avengers: The Initiative (2007) #11',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21012',
              name: 'Avengers: The Initiative (2007) #12',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/6040',
              name: 'Beyond! (Hardcover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/5635',
              name: 'Beyond! (2006) #6',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/39017',
              name: 'Captain America (2004) #617',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/35774',
              name: 'Captain America (2004) #618',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/65691',
              name: 'Power Pack Classic Vol. 1 (Trade Paperback)',
            },
          ],
          returned: 14,
        },
        series: {
          available: 6,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011371/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
              name: 'Avengers (1963 - 1996)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1945',
              name: 'Avengers: The Initiative (2007 - 2010)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1928',
              name: 'Beyond! (2007)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/997',
              name: 'Beyond! (2006)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/832',
              name: 'Captain America (2004 - 2011)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/23864',
              name: 'Power Pack Classic Vol. 1 (2017)',
            },
          ],
          returned: 6,
        },
        stories: {
          available: 15,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011371/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/5631',
              name: 'BEYOND! (2006) #6',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/8705',
              name: 'AVENGERS: THE INITIATIVE (2007) #2',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/14648',
              name: 'Avengers (1963) #192',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/33361',
              name: 'Avengers: The Initiative (2007) #6',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/33363',
              name: 'AVENGERS: THE INITIATIVE (2007) #7',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/36469',
              name: 'AVENGERS: THE INITIATIVE (2007) #8',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/36907',
              name: 'AVENGERS: THE INITIATIVE (2007) #9',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/44343',
              name: 'AVENGERS: THE INITIATIVE (2007) #10',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/44704',
              name: 'AVENGERS: THE INITIATIVE (2007) #11',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/45627',
              name: 'AVENGERS: THE INITIATIVE (2007) #12',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/79161',
              name: 'Captain America (2004) #618',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/79162',
              name: 'Captain America #618',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/88563',
              name: 'Captain America (2004) #617',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/88564',
              name: 'Interior #88564',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/142502',
              name: 'cover from POWER PACK CLASSIC VOL. 1 TPB (2017) #1',
              type: 'cover',
            },
          ],
          returned: 15,
        },
        events: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011371/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/255',
              name: 'Initiative',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/277',
              name: 'World War Hulk',
            },
          ],
          returned: 2,
        },
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/comics/characters/1011371/henry_peter_gyrich?utm_campaign=apiRef&utm_source=540f9d60e73b2d4db9fc08aaae0c89b4',
          },
          {
            type: 'wiki',
            url:
              'http://marvel.com/universe/Gyrich,_Henry_Peter?utm_campaign=apiRef&utm_source=540f9d60e73b2d4db9fc08aaae0c89b4',
          },
          {
            type: 'comiclink',
            url:
              'http://marvel.com/comics/characters/1011371/henry_peter_gyrich?utm_campaign=apiRef&utm_source=540f9d60e73b2d4db9fc08aaae0c89b4',
          },
        ],
      },
      {
        id: 1009343,
        name: 'Hercules',
        description: '',
        modified: '2013-11-14T14:47:08-0500',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/d0/52052ebddfa53',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009343',
        comics: {
          available: 281,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1009343/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/12650',
              name: 'Alpha Flight (1983) #110',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/29277',
              name: 'Assault on New Olympus Prologue One-Shot (2009) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/45821',
              name: 'Astonishing X-Men (2004) #60',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17490',
              name: 'Avengers (1998) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/61373',
              name: 'Avengers (2016) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17501',
              name: 'Avengers (1998) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17512',
              name: 'Avengers (1998) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17523',
              name: 'Avengers (1998) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/61380',
              name: 'Avengers (2016) #8',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/6953',
              name: 'Avengers (1963) #10',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/61383',
              name: 'Avengers (2016) #11',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17507',
              name: 'Avengers (1998) #25',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17509',
              name: 'Avengers (1998) #27',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/7263',
              name: 'Avengers (1963) #38',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/7274',
              name: 'Avengers (1963) #39',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/7286',
              name: 'Avengers (1963) #40',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/7291',
              name: 'Avengers (1963) #42',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/7292',
              name: 'Avengers (1963) #43',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/7293',
              name: 'Avengers (1963) #44',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17528',
              name: 'Avengers (1998) #44',
            },
          ],
          returned: 20,
        },
        series: {
          available: 101,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1009343/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
              name: 'Alpha Flight (1983 - 1994)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/9087',
              name: 'Assault on New Olympus Prologue One-Shot (2009)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/744',
              name: 'Astonishing X-Men (2004 - 2013)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/354',
              name: 'Avengers (1998 - 2004)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/22547',
              name: 'Avengers (2016 - 2018)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
              name: 'Avengers (1963 - 1996)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/9086',
              name: 'Avengers Academy (2010 - 2012)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1988',
              name: 'Avengers Annual (1967 - 1994)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1340',
              name: 'Avengers Assemble (2004)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1737',
              name: 'Avengers Assemble Vol. 3 (2006)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1816',
              name: 'Avengers Assemble Vol. 4 (2007)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2111',
              name: 'Avengers Forever (1998 - 2001)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/157',
              name: 'Avengers Legends Vol. 2: The Korvac Saga (2003)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/93',
              name: 'Avengers Legends Vol. I: Avengers Forever (2002)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/26034',
              name: 'Avengers No Road Home (2019)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/158',
              name: 'Avengers Vol. 1: World Trust (2003)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/13411',
              name: 'Avengers: Citizen Kang (2010 - Present)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/6476',
              name: 'Avengers: First to Last (2008 - Present)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/6473',
              name: 'AVENGERS: FIRST TO LAST PREMIERE HC (2008 - Present)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1679',
              name: 'Avengers: Galactic Storm Vol. 2 (2006)',
            },
          ],
          returned: 20,
        },
        stories: {
          available: 324,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1009343/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/4185',
              name: '2 of 4 - 4XLS',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/11034',
              name: 'Journey Into Mystery (1952) #124',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/11035',
              name: 'The Grandeur and the Glory',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/11037',
              name: 'Journey Into Mystery (1952) #125',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/11038',
              name: 'When Meet the Immortals',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12847',
              name: 'Like a Phoenx!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12957',
              name: 'Fantastic Four (1961) #333',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12958',
              name: 'The Dream is Dead Part Two',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/14442',
              name: 'The Avengers Break Up!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/14445',
              name: 'AVENGERS (1963) #100',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/14557',
              name: 'AVENGERS (1963) #151',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/14584',
              name: 'AVENGERS (1963) #163',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/14606',
              name: 'AVENGERS (1963) #173',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/14775',
              name: 'Avengers (1963) #249',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/14805',
              name: 'Avengers (1963) #262',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/14807',
              name: 'Avengers (1963) #263',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/14813',
              name: 'Avengers (1963) #266',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/14815',
              name: 'Avengers (1963) #267',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/14817',
              name: 'Avengers (1963) #268',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/14825',
              name: 'Avengers (1963) #271',
              type: 'cover',
            },
          ],
          returned: 20,
        },
        events: {
          available: 12,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1009343/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/310',
              name: 'Avengers VS X-Men',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/296',
              name: 'Chaos War',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/318',
              name: 'Dark Reign',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
              name: 'Fear Itself',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
              name: 'Infinity War',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/37',
              name: 'Maximum Security',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/336',
              name: 'Secret Empire',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/269',
              name: 'Secret Invasion',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/271',
              name: 'Secret Wars II',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/273',
              name: 'Siege',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/305',
              name: 'Spider-Island',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/277',
              name: 'World War Hulk',
            },
          ],
          returned: 12,
        },
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/characters/952/hercules?utm_campaign=apiRef&utm_source=540f9d60e73b2d4db9fc08aaae0c89b4',
          },
          {
            type: 'wiki',
            url:
              'http://marvel.com/universe/Hercules_(Heracles)?utm_campaign=apiRef&utm_source=540f9d60e73b2d4db9fc08aaae0c89b4',
          },
          {
            type: 'comiclink',
            url:
              'http://marvel.com/comics/characters/1009343/hercules?utm_campaign=apiRef&utm_source=540f9d60e73b2d4db9fc08aaae0c89b4',
          },
        ],
      },
      {
        id: 1010759,
        name: 'Heroes For Hire',
        description: '',
        modified: '2010-11-29T16:22:27-0500',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/f0/4c00376a77ce0',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010759',
        comics: {
          available: 84,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1010759/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/3203',
              name: 'Daughters of the Dragon (2006) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/37189',
              name: 'Heroes for Hire (2010) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/4838',
              name: 'Heroes for Hire (2006) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/38723',
              name: 'Heroes for Hire (2010) #1 (COMBINED 2ND PRINTING VARIANT)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/38724',
              name: 'Heroes for Hire (2010) #1 (FALCON 2ND PRINTING VARIANT)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/37196',
              name: 'Heroes for Hire (2010) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/5123',
              name: 'Heroes for Hire (2006) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/39012',
              name: 'Heroes for Hire (2010) #2 (2nd Printing Variant)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/37574',
              name: 'Heroes for Hire (2010) #2 (TOLIBAO VARIANT)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/5285',
              name: 'Heroes for Hire (2006) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/37198',
              name: 'Heroes for Hire (2010) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/37576',
              name: 'Heroes for Hire (2010) #3 (Tolibao Variant)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/37187',
              name: 'Heroes for Hire (2010) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/5595',
              name: 'Heroes for Hire (2006) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/37571',
              name: 'Heroes for Hire (2010) #4 (VARIANT)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/37197',
              name: 'Heroes for Hire (2010) #5',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/5712',
              name: 'Heroes for Hire (2006) #5',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/38715',
              name: 'Heroes for Hire (2010) #5 (THOR HOLLYWOOD VARIANT)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/37573',
              name: 'Heroes for Hire (2010) #5 (Tolibao VARIANT)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/37194',
              name: 'Heroes for Hire (2010) #6',
            },
          ],
          returned: 20,
        },
        series: {
          available: 11,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1010759/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/964',
              name: 'Daughters of the Dragon (2006)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/20084',
              name: 'Heroes for Hire (1997 - 1999)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1121',
              name: 'Heroes for Hire (2006 - 2007)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/13330',
              name: 'Heroes for Hire (2010 - 2011)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1966',
              name: 'Heroes for Hire Vol. 1: Civil War (2007)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/13558',
              name: 'Heroes for Hire Vol. 1: Control (2010 - Present)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2700',
              name: 'HEROES FOR HIRE VOL. 2: AHEAD OF THE CURVE TPB (2007)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3282',
              name: 'HEROES FOR HIRE VOL. 3: WORLD WAR HULK TPB (2008)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/20085',
              name: 'Heroes for Hire/Quicksilver Annual (1998)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/20674',
              name: 'Power Man and Iron Fist (1978 - 1986)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/20086',
              name: 'Quicksilver (1997 - 1998)',
            },
          ],
          returned: 11,
        },
        stories: {
          available: 94,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1010759/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/5401',
              name: 'DAUGHTERS OF THE DRAGON (2006) #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/6160',
              name: '1 of 5',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/6161',
              name: '1 of 5',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/6163',
              name: '2 of 5',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/6164',
              name: '3 of 3',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/6165',
              name: '3 of 3',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/6167',
              name: '1 of 2',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/6168',
              name: '2 of 2',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/6169',
              name: '2 of 2',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/6171',
              name: '1 of 3 - Story C',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/7872',
              name: '2 of 3 - Story C',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/7873',
              name: '2 of 3 - Story C',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/7875',
              name: '3 of 3 - Story C',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/8326',
              name: '3 of 3 - Story C',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/8327',
              name: 'TBD - 1 of 3',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/8328',
              name: 'TBD - 1 of 3',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/8675',
              name: 'TBD - 2 of 3',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/8676',
              name: 'TBD - 2 of 3',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/32374',
              name: 'World War Hulk 1 of 3; WWH SLUG',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/32601',
              name: 'World War Hulk 2 of 3; WWH SLUG',
              type: 'interiorStory',
            },
          ],
          returned: 20,
        },
        events: {
          available: 3,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1010759/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/238',
              name: 'Civil War',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
              name: 'Fear Itself',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/277',
              name: 'World War Hulk',
            },
          ],
          returned: 3,
        },
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/characters/955/heroes_for_hire?utm_campaign=apiRef&utm_source=540f9d60e73b2d4db9fc08aaae0c89b4',
          },
          {
            type: 'wiki',
            url:
              'http://marvel.com/universe/Heroes_for_Hire?utm_campaign=apiRef&utm_source=540f9d60e73b2d4db9fc08aaae0c89b4',
          },
          {
            type: 'comiclink',
            url:
              'http://marvel.com/comics/characters/1010759/heroes_for_hire?utm_campaign=apiRef&utm_source=540f9d60e73b2d4db9fc08aaae0c89b4',
          },
        ],
      },
      {
        id: 1011300,
        name: 'High Evolutionary',
        description: '',
        modified: '2013-10-24T13:29:06-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/f0/5269583a77bd3',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011300',
        comics: {
          available: 38,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011300/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/16897',
              name: 'Amazing Spider-Man Annual (1964) #22',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17271',
              name: 'Annihilation: Conquest (2007) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17405',
              name: 'Annihilation: Conquest (2007) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17645',
              name: 'Annihilation: Conquest (2007) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/20686',
              name: 'Annihilation: Conquest (2007) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/20885',
              name: 'Annihilation: Conquest (2007) #5',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21016',
              name: 'Annihilation: Conquest (2007) #6',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/65056',
              name: 'Avengers (2016) #673',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/6931',
              name: 'Avengers Annual (1967) #17',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/61456',
              name: 'Champions (2016) #15',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/3140',
              name: 'Essential Spider-Woman Vol.1 (Trade Paperback)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/12975',
              name: 'Fantastic Four (1961) #172',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/12976',
              name: 'Fantastic Four (1961) #173',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/12977',
              name: 'Fantastic Four (1961) #174',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/12978',
              name: 'Fantastic Four (1961) #175',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/8700',
              name: 'Fantastic Four Annual (1963) #21',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/62875',
              name: 'Guardians of the Galaxy (1990) #58',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/60669',
              name:
                'GUARDIANS OF THE GALAXY CLASSIC: IN THE YEAR 3000 VOL. 3 TPB (Trade Paperback)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/60692',
              name:
                'Incredible Hulk Epic Collection: The Hulk Must Die (Trade Paperback)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/33861',
              name: 'Iron Man/Thor (2010) #3',
            },
          ],
          returned: 20,
        },
        series: {
          available: 28,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011300/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2984',
              name: 'Amazing Spider-Man Annual (1964 - 2018)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3061',
              name: 'Annihilation: Conquest (2007)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/22547',
              name: 'Avengers (2016 - 2018)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1988',
              name: 'Avengers Annual (1967 - 1994)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/22552',
              name: 'Champions (2016 - 2019)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1513',
              name: 'Essential Spider-Woman Vol.1 (2005)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2121',
              name: 'Fantastic Four (1961 - 1998)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2012',
              name: 'Fantastic Four Annual (1963 - 1994)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/19019',
              name: 'Guardians of the Galaxy (1990 - 1994)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/22417',
              name:
                'GUARDIANS OF THE GALAXY CLASSIC: IN THE YEAR 3000 VOL. 3 TPB (2017)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/22424',
              name: 'Incredible Hulk Epic Collection: The Hulk Must Die (2017)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/10725',
              name: 'Iron Man/Thor (2010 - 2011)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/14243',
              name: 'Ka-Zar (1997 - 1999)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1671',
              name: 'MARVEL MASTERWORKS: THE INCREDIBLE HULK VOL. 3 HC (2006)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/20086',
              name: 'Quicksilver (1997 - 1998)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2073',
              name: 'Spider-Woman (1978 - 1983)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2080',
              name: 'Tales to Astonish (1959 - 1968)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2083',
              name: 'Thor (1966 - 1996)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/23289',
              name: 'Thor Epic Collection: In Mortal Flesh (2017)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/22361',
              name: 'THOR EPIC COLLECTION: THE WRATH OF ODIN TPB (2017)',
            },
          ],
          returned: 20,
        },
        stories: {
          available: 42,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011300/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12382',
              name: 'Cover #12382',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12384',
              name: 'A World He Never Made!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12568',
              name: 'Fantastic Four (1961) #172',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12569',
              name: 'Cry, the Bedeviled Planet!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12571',
              name: 'Fantastic Four (1961) #173',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12572',
              name: 'Counter-Earth Must Die--At the Hand of Galactus!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12573',
              name: 'Fantastic Four (1961) #174',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12574',
              name: 'Starquest!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12575',
              name: 'Fantastic Four (1961) #175',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12576',
              name: 'When Giants Walk the Sky!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/15310',
              name: 'Silver and Crimson:  Chapter 5',
              type: '',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/17240',
              name: 'Thor (1966) #450',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/17392',
              name: 'Beyond Life',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19854',
              name: 'Demon Night',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/20901',
              name: 'A Future Uncertain',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/35428',
              name: 'Kindred Spirits',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/36194',
              name: 'Annihilation: Conquest (2007) #1 - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/36494',
              name: 'Annihilation: Conquest (2007) #2 - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/36934',
              name: 'Annihilation: Conquest (2007) #3 - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37725',
              name: 'Beyond Life',
              type: 'interiorStory',
            },
          ],
          returned: 20,
        },
        events: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011300/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/293',
              name: 'Annihilation: Conquest',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/246',
              name: 'Evolutionary War',
            },
          ],
          returned: 2,
        },
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/characters/2936/high_evolutionary?utm_campaign=apiRef&utm_source=540f9d60e73b2d4db9fc08aaae0c89b4',
          },
          {
            type: 'wiki',
            url:
              'http://marvel.com/universe/High%20Evolutionary?utm_campaign=apiRef&utm_source=540f9d60e73b2d4db9fc08aaae0c89b4',
          },
          {
            type: 'comiclink',
            url:
              'http://marvel.com/comics/characters/1011300/high_evolutionary?utm_campaign=apiRef&utm_source=540f9d60e73b2d4db9fc08aaae0c89b4',
          },
        ],
      },
    ],
  };
  //Request Variables
  const url = `https://gateway.marvel.com:443/v1/public/characters?modifiedSince=${date}&offset=${offset}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  try {
    // const response = await axios.get(url);
    // console.log(response);
    return res.send(data);
  } catch (e) {
    return res.send({ error: e.message });
  }
});

module.exports = router;
