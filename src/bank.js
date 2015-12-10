'use strict';
var Client = require('./client');
var assert = require('assert');

var Bank = {
    init: function (args) {
        args = args || {};
        this.clients = args.clientRepo || [];

        return this;
    },
    addClient: function (args) {
        var client = args.client;
        assert.ok(typeof  client ===  typeof Client,'Wrong input!');
        this.clients.push(client);
    },
    findClient: function (args) {
        var name = args.name,
            clients = this.clients;
        for (var i in clients)
            if (clients[i].name === name)
                return clients[i];
        return null;
    },
    deleteClient: function (args) {
        var name = args.name,
            clients = this.clients;
        for (var i in clients)
            if (clients[i].name === name)
                delete clients[i];
    },
};

module.exports = Bank;