let beersong = require('./beersong');

function main(){
  let lyrics = beersong(99);
  console.log(lyrics);
}

main();

module.exports = main;

