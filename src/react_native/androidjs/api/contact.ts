const NativeModules = require('react-native').NativeModules;

class contact{
    getAll(){
        return JSON.parse(NativeModules.Contact.getAllContacts());
    }

    getCount(){
        return NativeModules.Contact.getContactsCount();
    }
    
    getByName(name){
        return JSON.parse(NativeModules.Contact.getContactByName(name));
    }
    add(name, number, email){
        if(name == undefined) name = null;
        if(number == undefined) number = null;
        if(email == undefined) email = null;
        return JSON.parse(NativeModules.Contact.addContact(name, number, email));
    }
}

export = new contact();