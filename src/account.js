'use strict'
var Transaction = require('./transaction');
var AccountType = require('./account-type');
var TransactionType = require('./transaction-type');
var assert = require('assert');
var Const = require('./const');
var Client = require('./client');

var Account = {
    init: function (args) {
        args = args || {};
        this.number = args.number; //usually it is generated automatically
        this.type = args.type || AccountType.AZN;
        this.balance = args.initialAmount || 0;
        this.transactions = [];

        return this;
    },
    deposit: function (args) {
        args = args || {};
        var amount = args.amount || 0;
        assert.ok(typeof amount === 'number' && amount > 0, 'Wrong input!');
        this.balance += amount;
        var transaction = Object.create(Transaction).init({
            type: TransactionType.CREDIT,
            amount: amount,
            balance: this.balance
        });
        this.transactions.push(transaction);
    },
    withdrawal: function (args) {
        args = args || {};
        var amount = args.amount || 0;
        assert.ok(typeof amount === 'number' && amount > 0 && amount <= this.balance, 'Wrong input!');
        this.balance -= amount;
        var transaction = Object.create(Transaction).init({
            type: TransactionType.DEBIT,
            amount: amount,
            balance: this.balance
        });
        this.transactions.push(transaction);
    },
    transfer: function (args) {
        args = args || {};
        var client = args.client,
            sentAmount = args.amount,
            clientAmount = client.getAccount({number: args.number});
        assert.ok(typeof sentAmount === 'number' && sentAmount > 0 && sentAmount <= this.balance
            && typeof client === typeof Client, 'Wrong input!');
        clientAmount.balance += sentAmount;
        this.balance -= sentAmount;
    },
    printTransactions: function () {
        var table = Const.TABLE_HEADER + Const.NEW_LINE,
            transactions = this.transactions;
        for (var i in transactions)
            table += transactions[i].toString();

        console.info(table);
    },
};

module.exports = Account;
