//Get all thequery parameters from a url incluiding duplicated ones

module.exports = function getQueryVariables() {
  const query = decodeURI(window.location.href.split('/?')[1]);
  const vars = query.split('&');
  const pairs = [];
  for (let i = 0; i < vars.length; i++) {
    pairs.push(vars[i].split('='));
  }
  return pairs;
};
