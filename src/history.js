'use strict'
var Const = require('./const');
var dateFormat = require('dateformat');

var History = {
    init: function () {
        this.table = Const.TABLE_HEADER + Const.NEW_LINE;

        return this;
    },
    add: function (args) {
        var date = args.date || dateFormat(new Date(), 'dd/mm/yyyy'),
            debit = args.debit || ' ',
            credit = args.credit || ' ',
            balance = args.balance,
            delimiter = Const.DELIMITER;

        this.table += [date, credit, debit, balance].join(delimiter) + Const.NEW_LINE;
    }
};

module.exports = History;