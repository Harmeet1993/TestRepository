public class AccountVfClass {

    public list<Account> acclist{get;set;}
    public list<Account> accnewlist{get;set;}

    public AccountVfClass(){
    acclist = new list<Account>();
    accnewlist = new list<Account>();
    }

    public void getaccount(){
    acclist = [select Id, Name, Type, Fax from Account order by CreatedDate desc limit 10];
    }

    public void getnewaccount(){
    accnewlist = [select Id, Name, Type, Fax from Account order by CreatedDate asc limit 10];
    }


}