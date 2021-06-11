public class Demo_Qclass implements system.Queueable {

 public Id AccId;
    
 public Demo_Qclass(Id accountid){
 this.AccId = accountid;
}

 public void execute(queueablecontext qc){

 Contact con = new Contact(FirstName='Mario', LastName='Peter', AccountId = this.AccId);
 insert con;


}

}