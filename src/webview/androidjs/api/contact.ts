class contact{
    public getAll(){
        return JSON.parse((<any>window).android.getAllContacts());
    }

    public getCount(){
        return (<any>window).android.getContactsCount();
    }
    
    public getByName(name:String){
        return JSON.parse((<any>window).android.getContactByName(name));
    }
    public add(name:String, number:String, email:String){
        if(name == undefined) name = null;
        if(number == undefined) number = null;
        if(email == undefined) email = null;
        return JSON.parse((<any>window).android.addContact(name, number, email));
    }
}

export = new contact();