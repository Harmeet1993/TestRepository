trigger Trg5 on Account (after update) {
    
    for(Account a : trigger.new){

        if(trigger.oldmap.get(a.id).Fax != a.Fax){
            
            list<contact> con = [SELECT AccountId, MailingAddress, Fax
                              FROM Contact where AccountId = : a.id];
            
            for(contact c:con ){
                
                c.fax = a.fax;
     
       update c;
            }
            
        }
    }

}