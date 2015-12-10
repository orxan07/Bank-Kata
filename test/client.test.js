'use strict';
var chai = require('chai');
var Client = require('../src/client');

chai.use(require('chai-shallow-deep-equal'));
var assert = chai.assert;

describe('Test a client object', function () {
    describe('#deposit if invoke this method', function () {

        errorCheck(-5);
        errorCheck(0);
        errorCheck('string');

        it('should make a deposit to bank client', function () {
            var client = Object.create(Client);
            client.init({name: 'Ali'})
            client.deposit({amount: 1000});
            var result = client.account.balance;
            var expected = 1000;
            assert.equal(result, expected);

        });

        function errorCheck(input) {
            it('should throw an exception if input is ' + input, function () {
                var amount = input;
                assert.throw(function () {
                    client.init({name: 'Ali'});
                    client.deposit({amount: amount});
                });
            });
        };
    });

    describe('#withdrawal if invoke this method', function () {
        var client = Object.create(Client);


        errorCheck(-5);
        errorCheck(0);
        errorCheck(101);
        errorCheck('string');

        it('should make a withdrawal from a bank client', function () {
            client.init({name: 'Ali'});
            client.deposit({amount: 500});
            client.withdrawal({amount: 100});
            var result = client.account.balance;
            var expected = 400;
            assert.equal(result, expected);
        })

        function errorCheck(input) {
            it('should throw an exception if input is ' + input, function () {
                var amount = input;
                assert.throw(function () {
                    client.init({name: 'Ali'});
                    client.deposit({amount: 100});
                    client.withdrawal({amount: amount});
                });
            });
        };
    });

    describe('#transfer if invoke this method', function () {
        var client = Object.create(Client);
        var receiverClient = Object.create(Client);

        errorCheck(-5);
        errorCheck(0);
        errorCheck(501);
        errorCheck('string');

        it('should make a transfer to different client of a bank', function () {
            client.init({name: 'Ali'});
            receiverClient.init({name: 'Lucky Man'});
            client.deposit({amount: 500});
            client.transfer({client: receiverClient, amount: 100});
            var result = receiverClient.account.balance;
            var expected = 100;
            assert.equal(result, expected);

        });
        it('when make a transfer to different client the sender client amount decrease', function () {
            client.init({name: 'Ali'});
            receiverClient.init({name: 'Lucky Man'});
            client.deposit({amount: 500});
            client.transfer({client: receiverClient, amount: 100});
            var result = client.account.balance;
            var expected = 400;
            assert.equal(result, expected);

        });

        function errorCheck(input) {
            it('should throw an exception if input is ' + input, function () {
                var amount = input;
                client.init({name: 'Ali'});
                receiverClient.init({name: 'Lucky Man'});
                client.deposit({amount: 500});
                assert.throw(function () {
                    client.transfer({client: receiverClient, amount: amount});
                });
            });
        };
    });
});