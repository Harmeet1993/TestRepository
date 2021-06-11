public class Datatablecls {

    @AuraEnabled
    Public static list<Account> getaccount(){
      return[SELECT Id, name, Rating, Industry, Phone from Account];  
        
    }

}