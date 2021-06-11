public class contactcontrlr {

    @AuraEnabled
    Public static list<contact> getcontacts(string Account_Id){

  return[SELECT firstname, lastname, email, phone from contact WHERE accountid = : Account_Id ];
        
        
        
    }

}