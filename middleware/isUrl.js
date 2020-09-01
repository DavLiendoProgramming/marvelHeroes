// From an input string returns wheter its an URL for viewing a
// comic or doing a search of a character

module.exports = function (str) {
  let baseUrl = 'https://www.marvel.com/comics/issue/';
  return str.search(baseUrl) !== -1;
};
