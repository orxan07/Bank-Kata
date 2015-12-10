'use strict';
var chai = require('chai');
var Bank = require('../src/bank');
var Client = require('../src/client');

chai.use(require('chai-shallow-deep-equal'));

var assert = chai.assert;

describe('Test a bank object', function () {
    describe('#addClient if invoke this method', function () {
        it('should add client to the bank client list', function () {
            var bank = Object.create(Bank).init();
            var client = Object.create(Client).init({name:'Ali'});
            bank.addClient({client:client});
            var result = bank.clients[0];
            var expected = client;
            assert.equal(result,expected);

        })
    });

    describe('#findClient if invoke this method', function () {
        it('should find and return client by name', function () {
            var bank = Object.create(Bank).init()
            var client1 = Object.create(Client).init({name:'Ali'});
            var client2 = Object.create(Client).init({name:'Ahmed'});
            bank.addClient({client:client1});
            bank.addClient({client:client2});
            console.log(JSON.stringify(bank))
            var result = bank.findClient({name:'Ali'})
            var expected = client1;
            assert.shallowDeepEqual(result,expected);

        })
    });
    describe('#deleteClient if invoke this method', function () {
        it('should delete client from clients list', function () {
            var bank = Object.create(Bank).init()
            var client1 = Object.create(Client).init({name:'Ali'});
            var client2 = Object.create(Client).init({name:'Ahmed'});
            bank.addClient({client:client1});
            bank.addClient({client:client2});
            bank.deleteClient({name:'Ali'});
            var result = bank.findClient({name:'Ali'});
            var expected = null;
            assert.shallowDeepEqual(result,expected);

        })
    });
});