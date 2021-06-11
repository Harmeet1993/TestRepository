public with sharing class LC2 {

   @Auraenabled
    public static list<Account> searchaccount(){
        
        return [SELECT Id, Name, phone, fax FROM Account];

    }

}