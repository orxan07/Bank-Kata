'use strict';
var chai = require('chai');
var Account = require('../src/account');

chai.use(require('chai-shallow-deep-equal'));
var assert = chai.assert;

describe('Test an amount object', function () {
    describe('#add if invoke this method', function () {
        it('should increase amount number', function () {
            var amount = Object.create(Account).init({initialAmount:500})
            amount.add({amount:100});
            var result = amount.balance;
            var expected = 600;
            assert.equal(result,expected);

        })
    });

    describe('#subtract if invoke this method', function () {
        it('should decrease amount number', function () {
            var account = Object.create(Account).init({initialAmount:500})
            account.subtract({amount:100});
            var result = account.balance;
            var expected = 400;
            assert.equal(result,expected);

        })
    });
});