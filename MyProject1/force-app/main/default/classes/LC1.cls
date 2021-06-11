public with sharing class LC1 {

@Auraenabled
    Public static list<contact> searchcontacts(){
        
        return[SELECT Id, Name, phone FROM contact LIMIT 30];
    }

}