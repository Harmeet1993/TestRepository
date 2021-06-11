trigger Trg2 on Account (before insert) {
    
    List<opportunity> o = new list<opportunity>();
    for(Account a : trigger.new){
        
        Opportunity op = new opportunity();
        
        op.name = a.name;
        op.ordernumber__c = a.phone;
        op.CloseDate = a.SLAExpirationDate__c;
        op.StageName = 'Closed Won';
        
        o.add(op);
        
        
    }
    
    insert o;

}