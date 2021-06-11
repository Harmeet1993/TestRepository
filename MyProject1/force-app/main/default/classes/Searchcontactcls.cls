public class Searchcontactcls {

@AuraEnabled
    Public static list<contact> searchContact(string contactName){
        
        system.debug('contactName' +contactName);
        string finalsearch= '%'+contactName+'%';
        return[SELECT Id, Name, Accountid, Phone, Email from Contact where Name LIKE: finalsearch];
    }

}