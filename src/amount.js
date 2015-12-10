'use strict'

var Amount = {
    init: function (args) {
        args = args || {};
        this.balance = args.initialAmount || 0;

        return this;
    },
    add: function (amount) {
        this.balance += amount;
    },
    subtract: function (amount) {
        this.balance -= amount;
    },
};

module.exports = Amount;