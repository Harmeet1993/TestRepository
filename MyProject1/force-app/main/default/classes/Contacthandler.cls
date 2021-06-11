public class Contacthandler {

    public static void countcontact(list<contact> newconlist, list<contact> oldconlist){

      set<id> accid = new set<id>();

        try{
        if(newconlist != null){
        for(contact c : newconlist){
         if(c.accountid != null){
          accid.add(c.accountid);
}}}

            if(oldconlist != null){
            for(contact c : oldconlist){
             accid.add(c.accountid);

}}
 
 list<account> acclist = [Select id, Name, (select id, name from contacts) from Account where id IN : accid];

            for(Account acc : acclist){
            acc.Countcontacts__c = acc.contacts.size(); 
}          
 
update acclist;            
}

        catch(exception e){
        system.debug('Error is ' +e.getMessage());
}
        
    }
}