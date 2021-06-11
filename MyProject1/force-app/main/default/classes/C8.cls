public with sharing class C8 {

list<Account> acc = new list<account>();

    public list<account> getprospect(){
        
        acc = [SELECT Name, id, phone FROM Account WHERE type = 'Prospect'];
       return acc;
     
    }

    public list<account> getcustomer(){
        
        acc = [SELECT Name, id, phone FROM Account WHERE type = 'Customer - Direct'];
        return acc;
    }

}