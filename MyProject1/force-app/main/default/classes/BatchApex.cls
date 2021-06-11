public class BatchApex implements database.Batchable<sObject>, database.stateful {

  string query;
  integer numberofRecords=0;    
  public database.QueryLocator start(database.batchablecontext bc){

  query= 'SELECT Id, Website FROM Lead';
  return database.getQueryLocator(query);

}

    public void execute(database.BatchableContext bc, list<lead> scope){
    list<lead> Leadstoupdate = new list<lead>();
        for(Lead L : scope ){

            if(L.website == 'bertha@fcof.net'){
               L.website='harmeet@gmail.com';
 
            leadstoupdate.add(L);
            numberofRecords=numberofRecords + 1;
            
        }

        }

     system.debug('No of Records updated are:' + numberofRecords);
      update leadstoupdate;
         }
        
     public void finish(database.BatchableContext bc){

     emailManager em = new emailManager();
     em.sendemail('singhharmeet1808@gmail.com', 'Batch Successfull', 'Number of Records updated are' + numberofRecords);
            
            
        }
        
        
    

}