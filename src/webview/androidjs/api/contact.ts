class contact{
    getAll(){
        return JSON.parse((<any>window).android.getAllContacts());
    }

    getCount(){
        return (<any>window).android.getContactsCount();
    }
    
    getByName(name){
        return JSON.parse((<any>window).android.getContactByName(name));
    }
    add(name, number, email){
        if(name == undefined) name = null;
        if(number == undefined) number = null;
        if(email == undefined) email = null;
        return JSON.parse((<any>window).android.addContact(name, number, email));
    }
}

export = new contact();