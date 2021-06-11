public class SearchAccountclass {

 @AuraEnabled
    public static list<account> getaccounts(string accountname){
        string finalsearch;
        finalsearch='%'+accountname+'%';
        return[select Name, Industry, AnnualRevenue, Fax from Account where Name LIKE : finalsearch];
    }
}