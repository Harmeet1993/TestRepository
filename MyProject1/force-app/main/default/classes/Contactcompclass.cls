public class Contactcompclass {

   @AuraEnabled
    public static list<Contact> getcontacts(string conname){

   string search = '%'+conname+'%';
   return[select Name, Phone, Fax, Email from Contact where Name LIKE: search];
}

}