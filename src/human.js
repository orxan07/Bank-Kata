'use strict';
var assert = require('assert');
var Const = require('./const');


var Human = {
    name:'',
    set: function (args) {
        args = args || {};
        var name = args.name;
        assert.ok(typeof  name === 'string',name !== Const.EMPTY,'Wrong input!');
        this.name = name;

        return this;
    },
};

module.exports = Human;
