'use strict';
var chai = require('chai');
var Account = require('../src/account');
var AccountType = require('../src/account-type');
var Client = require('../src/client');

chai.use(require('chai-shallow-deep-equal'));

var assert = chai.assert;

describe('Test a account object', function () {

    describe('#transfer should make a transfer to different client of a bank', function () {

            var receiverAccount = Object.create(Account).init({
                type: AccountType.USD,
                initialAmount: 100,
                number: 5555
            });
            var client = Object.create(Client).init({name: 'Ali'});

            client.addAccount({account: receiverAccount});

            errorCheck({client:client,amount:-5,number:5555});

            errorCheck({client:client,amount:0,number:5555});

            errorCheck({client:client,amount:101,number:5555});

            errorCheck({client:client,amount:50,number:6666});

            errorCheck({client:client,amount:'string',number:5555});

            errorCheck({client:'string',amount:50,number:5555});

            errorCheck({client:{},amount:50,number:5555});

            function errorCheck(input) {
                it('should throw an exception if input is ' + JSON.stringify(input), function () {
                    assert.throw(function () {
                        var account = Object.create(Account).init({
                            type: AccountType.USD,
                            initialAmount: 100,
                            number: 6666
                        });
                        account.transfer(input);
                    });
                })
            };

            it('should make a transfer to the different account', function () {
                var account = Object.create(Account).init({type: AccountType.USD, initialAmount: 100, number: 6666});
                var receiverAccount = Object.create(Account).init({
                    type: AccountType.USD,
                    initialAmount: 100,
                    number: 5555
                });
                var client = Object.create(Client).init({name: 'Ali'});

                client.addAccount({account: receiverAccount});
                account.transfer({client: client, amount: 100, number: 5555});
                var result = client.getAccount({number: 5555}).balance;
                var expected = 200;
                assert.equal(result, expected);
            });
        }
    );

    describe('#deposit should make a deposit', function () {


            errorCheck({amount:0});

            errorCheck({amount:-100});

            errorCheck({amount:'string'});

            function errorCheck(input) {
                it('should throw an exception if input is ' + JSON.stringify(input), function () {
                    assert.throw(function () {
                        var account = Object.create(Account).init({type: AccountType.USD, number: 5555});
                        account.deposit(input);
                    });
                })
            };

            it('should make a deposit if input value is {amount:100}', function () {
                var account = Object.create(Account).init({type: AccountType.USD, number: 5555});
                account.deposit({amount: 100});
                var result = account.balance;
                var expected = 100;
                assert.equal(result, expected);
            });
        }
    );

    describe('#withdrawal should make a withdrawal', function () {

            errorCheck({amount:0});

            errorCheck({amount:101});

            errorCheck({amount:-5});

            errorCheck({amount:'string'});

            function errorCheck(input) {
                it('should throw an exception if input is ' + JSON.stringify(input), function () {
                    assert.throw(function () {
                        var account = Object.create(Account)
                            .init({type: AccountType.USD, number: 5555,initialAmount:100});
                        account.withdrawal(input);
                    });
                })
            };

            it('should make a withdrawal if input value is {amount:100} and current account balance is 100 USD', function () {
                var account = Object.create(Account).init({type: AccountType.USD, initialAmount: 100});
                account.withdrawal({amount: 99});
                var result = account.balance;
                var expected = 1;
                assert.equal(result, expected);
            });
        }
    );
});