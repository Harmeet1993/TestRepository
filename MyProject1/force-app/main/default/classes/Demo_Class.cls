public class Demo_Class implements system.Queueable{

    public Account acc;

    public Demo_Class(Account acct){
    this.acc = acct;

    }

     public void execute(queueablecontext qc){
     this.acc.Name = 'Paul Marks Queue';
     this.acc.Industry = 'Prospect';
     update this.acc;
     Demo_Qclass dc = new Demo_Qclass(this.acc.id);
     Id batchid = system.enqueueJob(dc);
     AsyncApexJob jobinfo = [select id, status from AsyncApexJob where id=:batchid];
     system.debug('Job info is'+ jobinfo);  
 
    }   

}