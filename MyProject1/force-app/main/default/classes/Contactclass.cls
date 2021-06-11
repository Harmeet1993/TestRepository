public class Contactclass {

   @AuraEnabled
    Public static list<account> getcontactlist(){
    list<account> conlist = new list<account>([SELECT Id, name, phone from account ]);
    return conlist;
        
    }

}