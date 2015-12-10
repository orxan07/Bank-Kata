'use strict'

var Account = {
    init: function (args) {
        args = args || {};

        this.balance = args.initialAmount || 0;

        return this;
    },
    add: function (args) {
        var amount = args.amount || 0;
        this.balance += amount;
    },
    subtract: function (args) {
        var amount = args.amount || 0;
        this.balance -= amount;
    },
};

module.exports = Account;
