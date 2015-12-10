'use strict';
var chai = require('chai');
var Amount = require('../src/amount');

chai.use(require('chai-shallow-deep-equal'));
var assert = chai.assert;

describe('Test an amount object', function () {
    describe('#add if invoke this method', function () {
        it('should increase amount number', function () {
            var amount = Object.create(Amount).init({initialAmount:500})
            amount.add(100);
            var result = amount.balance;
            var expected = 600;
            assert.equal(result,expected);

        })
    });

    describe('#subtract if invoke this method', function () {
        it('should decrease amount number', function () {
            var amount = Object.create(Amount).init({initialAmount:500})
            amount.subtract(100);
            var result = amount.balance;
            var expected = 400;
            assert.equal(result,expected);

        })
    });
});