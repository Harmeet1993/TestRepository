public with sharing class C7 {

list<account> acts = new list<account>();

    public list<account> getacts(){
        
        return acts;
    }

    public pageReference direct(){
        
        acts = [SELECT Name, id, phone, fax FROM Account WHERE type ='Customer - Direct'];
        return null;
        
    }

   public pageReference channel(){
        
        acts = [SELECT Name, id, phone, fax FROM account WHERE type = 'Customer - Channel'];
        return null;
    }

}