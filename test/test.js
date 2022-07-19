'use strict';

const mocha = require('mocha');
const assert = require('assert');

const Chinese = require('../');

const describe = mocha.describe;
const it = mocha.it;

describe('Simplfied and Traditional Chinese Converter', function() {
	describe('', function() {
		it('Simplfied to Traditional', function(done) {
			var zhS = '中华人民共和国成立于一九四九年（1949年10月1日），首都北京。';
            assert.equal(Chinese.CHINESE_SIMPLFIED_TRADITIONAL_TRANSFORM('T',zhS),'中華人民共和國成立於一九四九年（1949年10月1日），首都北京。');
			done();
		});

		it('Traditional to Simplfied', function(done) {
			var zhT = '中華人民共和國成立於一九四九年（1949年10月1日），首都北京。';
			assert.equal(Chinese.CHINESE_SIMPLFIED_TRADITIONAL_TRANSFORM('S',zhT),'中华人民共和国成立于一九四九年（1949年10月1日），首都北京。');
			done();
		});
	});
})
