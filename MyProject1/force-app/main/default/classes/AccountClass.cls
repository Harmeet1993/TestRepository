public class AccountClass {

   @AuraEnabled
    Public static list<Account> getaccounts(string Account_Name){
  
        string search='%'+Account_Name+'%';
              
        return[SELECT Id, Name, Rating, Industry, Phone FROM Account WHERE Name LIKE: search];
    }

}