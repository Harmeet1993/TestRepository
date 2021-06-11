public class RegistrationClass {

    @AuraEnabled
    public static void createcontact(string name, string email, string passwd){
    Aspirant__c aspr = new Aspirant__c(Name = name, Email__c = email, Password__c = passwd);
    insert aspr;
    
}}