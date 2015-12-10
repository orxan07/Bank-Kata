'use strict'

var Amount = {
    init: function (args) {
        args = args || {};
        //problem with naming. m.b. better choice is 'number'?
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