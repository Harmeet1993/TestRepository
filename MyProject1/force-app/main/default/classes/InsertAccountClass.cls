@RestResource(urlMapping = '/AccountApi/*')
global with sharing class InsertAccountClass {

    @HttpGet
    global static list<Account> getaccounts(){
    List<Account> acclist = [select Id, Name, Fax from Account ORDER BY CreatedDate desc limit 5];
     return acclist;

}

  @HttpPost
    global static list<account> postaccount(string Name, string fax, string accnumb){
    list<Account> acclist = new list<account>();
    Account acc = new Account();
    acc.Name = Name;
    acc.Fax = fax;
    acc.AccountNumber = accnumb;
    acclist.add(acc);
    insert acclist;
    return acclist;

}


}