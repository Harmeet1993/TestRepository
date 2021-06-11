public class SearchAccountcls {

    @AuraEnabled
    public static list<Account> getaccount(string AccountName){
       string finalsearch= '%'+AccountName+'%'; 
       return[SELECT Name, AnnualRevenue, Industry, Phone from Account where Name LIKE : finalsearch];
         }
}