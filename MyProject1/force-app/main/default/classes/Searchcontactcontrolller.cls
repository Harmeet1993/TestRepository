public class Searchcontactcontrolller {

   @AuraEnabled
    Public static list<contact> searchContact(String contactName){
        string search = '%'+contactName+'%';
        return[SELECT Id, Name, AccountId, OtherCity,lastName FROM Contact where Name LIKE : search Limit 100];
    } 

}