// Get a random character from the Marvel API
//The API have a (probably)  total amount of 687 characters
//To get a random character, get 20 charactes from the total and then play
//with the offset

module.exports = function () {
  let rand = Math.floor(Math.random() * 34.35);
  return rand * 20;
};
