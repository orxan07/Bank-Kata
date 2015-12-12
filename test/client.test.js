'use strict';
var chai = require('chai');
var Client = require('../src/client');
var Account = require('../src/account');
var AccountType = require('../src/account-type');

chai.use(require('chai-shallow-deep-equal'));
var assert = chai.assert;

describe('Test a client object', function () {
    describe('#addAccount should add an account to the client account list', function () {
        it('create and add the one USD type account to the client accounts', function () {
            var client = Object.create(Client).init({name: 'Ali'});
            var account = Object.create(Account).init({type: AccountType.USD,number:5555});
            client.addAccount({account: account});
            var result = client.accounts[0];
            var expected = account;
            assert.shallowDeepEqual(result,expected);
        });
    });
});

describe('Test a client object', function () {
    describe('#getAccount should get an account from the client account list', function () {
        it('return a USD type account', function () {
            var client = Object.create(Client).init({name: 'Ali'});
            var account = Object.create(Account).init({type: AccountType.USD,number:5555});
            client.addAccount({account: account});
            var result = client.getAccount({number:5555});
            var expected = account;
            assert.shallowDeepEqual(result,expected);
        });
    });
});