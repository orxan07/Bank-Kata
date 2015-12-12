'use strict';

var Const = require('./const');
var dateFormat = require('dateformat');
var TransactionType = require('./transaction-type');

var Transactions = {
    init: function (args) {
        args = args || {};
        this.date = dateFormat(new Date(), 'dd/mm/yyyy');
        this.type = args.type;
        this.amount = args.amount;
        this.balance = args.balance; // was forced :)

        return this;
    },
    toString: function () {
        var date = this.date,
            debit = this.isDebit() ? this.amount : ' ',
            credit = this.isCredit() ? this.amount : ' ',
            balance = this.balance,
            delimiter = Const.DELIMITER;

        var result = [date, credit, debit, balance].join(delimiter) + Const.NEW_LINE;

        return result;
    },
    isDebit: function () {
        return (this.type === TransactionType.DEBIT)
    },
    isCredit: function () {
        return (this.type === TransactionType.CREDIT)
    }
};

module.exports = Transactions;