public with sharing class Accountcontoller {
    
    @AuraEnabled
    
    public static list<account> getaccount(){
        
        return[SELECT Name, Id, phone FROM Account];
    }

     
 
}