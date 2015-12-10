'use strict';
var History = require('./history');
var Amount = require('./account');
var Human = require('./human');
var assert = require('assert');
var Client = Object.create(Human);

Client.init = function (args) {
    args = args || {};
    this.set({name: args.name});
    this.account = Object.create(Amount).init();
    this.history = Object.create(History).init();

    return this;
};

Client.deposit = function (args) {
    var amount = args.amount || args,//is it good practice?
        balance = this.account.balance;
    assert.ok(typeof amount === 'number' && amount > 0, 'Wrong input!');
    
    this.account.add({amount:amount});
    this.history.add({credit: amount, balance: balance});
};

Client.withdrawal = function (args) {
    var amount = args.amount || args,//is it good practice?
        balance = this.account.balance;
    assert.ok(typeof amount === 'number' && amount > 0 && amount <= balance, 'Wrong input!');
    
    this.account.subtract({amount:amount});
    this.history.add({debit: amount, balance: balance});
};

Client.transfer = function (args) {
    var client = args.client,
        sentAmount = args.amount,
        clientAmount = client.account;
    assert.ok(typeof sentAmount === 'number' && sentAmount > 0 && sentAmount <= this.account.balance, 'Wrong input!');
    clientAmount.add({amount:sentAmount});

    this.account.subtract({amount:sentAmount});
};

Client.printHistory = function () {
    var history = this.history;
    console.info(history.table);
};

module.exports = Client;
