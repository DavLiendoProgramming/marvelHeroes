//get the id from marvel url's like:
//tested for:  'http://gateway.marvel.com/v1/public/comics/17752'
module.exports = function (str) {
  return str.split('comics/')[1];
};
