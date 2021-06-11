@RestResource(urlMapping = '/ContactApi/*')
global with sharing class ContactRestApi {

   @HttpGet
   global static list<contact> getcontacts(){
    list<contact> conlist = [select Id, FirstName, Email, Phone from contact limit 10];
    return conlist;

}



}