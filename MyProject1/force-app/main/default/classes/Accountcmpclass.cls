public class Accountcmpclass {

   @AuraEnabled 
    public static list<Account> getaccount(string Acc_Name){

      string search='%'+Acc_Name+'%';
        
        return[SELECT Id, Name, Rating, Industry, Phone from Account WHERE Name LIKE : search];
    }

}