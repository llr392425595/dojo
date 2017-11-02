"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var beersong = require("../lib/beersong");

describe("测试描述", function () {
  it("add lyric while num equal 0", function () {
    let num = 0;
    let lyric = beersong(num);

    expect(lyric).to.equal(`No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`);
  });

  it("add lyric while num equal 1", function () {
    let num = 1;
    let lyric = beersong(num);

    expect(lyric).to.equal(`1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`);
  });

  it("add lyric while num equal 2", function () {
    let num = 2;
    let lyric = beersong(num);

    expect(lyric).to.equal(`2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.
1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`);
  });

  it("add common lyric while num between 3 ~ 99", function () {
    let num = 3;
    let lyric = beersong(num);

    expect(lyric).to.equal(`3 bottles of beer on the wall, 3 bottles of beer.
Take one down and pass it around, 2 bottles of beer on the wall.
2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.
1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`);
  });

});