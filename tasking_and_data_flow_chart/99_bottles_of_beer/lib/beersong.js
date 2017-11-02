const _ = require('lodash');

function withUnit(num) {
  if (num === 0) {
    return 'no more bottles';
  }
  if (num === 1) {
    return '1 bottle';
  }
  if (num > 1) {
    return `${num} bottles`;
  }

}
function toLyric(num) {
  let firstLine = `${_.capitalize(withUnit(num))} of beer on the wall, ${withUnit(num)} of beer.`;
  let secondLine = `Take one down and pass it around, ${withUnit(num - 1)} of beer on the wall.`;
  if (num === 0) {
    secondLine = `Go to the store and buy some more, 99 bottles of beer on the wall.`;
  }

  return firstLine + '\n' + secondLine;
}

function mapLyric(num) {
  let lyricArr = [];
  for (let i = num; i >= 0; i--) {
    lyricArr.push(toLyric(i));
  }
  return lyricArr.join('\n');
}


function beersong(num) {
  if (num === 0)
    return toLyric(0);

  return mapLyric(num);
}

module.exports = beersong;

