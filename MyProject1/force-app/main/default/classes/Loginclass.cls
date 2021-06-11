public class Loginclass {

    @AuraEnabled
    public static void checkuser(string conname){
    contact con = [select name, id, email from contact where name=:conname limit 1];
     if(con != null){
     system.debug(con);

     }}

}