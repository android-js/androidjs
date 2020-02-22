"use strict";
var NativeModules = require('react-native').NativeModules;
var contact = /** @class */ (function () {
    function contact() {
    }
    contact.prototype.getAll = function () {
        return JSON.parse(NativeModules.Contact.getAllContacts());
    };
    contact.prototype.getCount = function () {
        return NativeModules.Contact.getContactsCount();
    };
    contact.prototype.getByName = function (name) {
        return JSON.parse(NativeModules.Contact.getContactByName(name));
    };
    contact.prototype.add = function (name, number, email) {
        if (name == undefined)
            name = null;
        if (number == undefined)
            number = null;
        if (email == undefined)
            email = null;
        return JSON.parse(NativeModules.Contact.addContact(name, number, email));
    };
    return contact;
}());
module.exports = new contact();
