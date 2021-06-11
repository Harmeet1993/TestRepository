public with sharing class Contactcontoller {   

    @AuraEnabled
    
    public static list<contact> searchcontacts(){
        
        return[SELECT Name, Id, phone FROM Contact];
    }

@AuraEnabled
    
    public static contact findbyid(string contactId){
        
        return[SELECT Name, Id, Phone FROM contact  WHERE ID= :ContactId ];
    }
    
}