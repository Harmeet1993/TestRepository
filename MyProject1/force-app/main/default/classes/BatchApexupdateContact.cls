public class BatchApexupdateContact implements Database.Batchable<sobject>, database.stateful {

    integer NumberofRecorsupdated = 0; 
    public database.QueryLocator start(database.BatchableContext bc){

    string query;    
    query = 'SELECT Name, Email FROM contact'; 
    return database.getQueryLocator(query);
        
    }

    public void execute(database.batchablecontext bc, list<contact> scope){

    list<contact> conlist = new list<contact>();
        for(contact c : scope ){
            
            if(c.email == NULL){
                
                c.email= 'harmeet@google.com';
                conlist.add(c);
                NumberofRecorsupdated = NumberofRecorsupdated + 1;
                
            }
        }
       
   update conlist;  
   system.debug('Number of updates: ' + NumberofRecorsupdated);
        
    }

    public void finish(database.BatchableContext bc){
        
        emailManager em = new emailManager();
        em.sendemail('harmeet.raunak93@gmail.com', 'Batch Updates', 'Numberofemails updated today for:'+ NumberofRecorsupdated);
    }

}