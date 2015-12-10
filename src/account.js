'use strict'

var Account = {
    init: function (args) {
        args = args || {};
        //problem with naming. m.b. better choice is 'number'?
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