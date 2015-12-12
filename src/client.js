'use strict';

var Human = require('./human');
var assert = require('assert');
var Account =require('./account');

var Client = Object.create(Human);

Client.init = function (args) {
    args = args || {};

    this.initHuman({name: args.name});
    this.accounts = [];

    return this;
};

Client.addAccount = function (args) {
    args = args || {};

    var account = args.account;

    assert.ok(typeof account === typeof Account,'Wrong input!');

    this.accounts.push(account);
};

Client.getAccount = function (args) {
    args = args || {};

    var accountNumber = args.number,
        accounts = this.accounts;

    for (var i in accounts)
        if (accounts[i].number === accountNumber)
            return accounts[i];

    return null;
};

module.exports = Client;