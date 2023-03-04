const Filter = require('bad-words');
const polishProfanityList = require('../data/polishProfanities');
const listOfProfanities = polishProfanityList.swearingPolish;

const filter = new Filter({ replaceRegex: /[A-Za-z0-9\u0107가-힣_]/g });
filter.addWords(...listOfProfanities);

const filterText = text => {
   const filtered = filter.clean(text);

   return filtered;
};

module.exports = { filterText };