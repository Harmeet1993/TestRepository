public class OppTrg {
    
    public static void check_opp(list<opportunity> op){
        
        double amount = 0;
        
        for(opportunity o: [SELECT amount from Opportunity
                           WHERE createddate= TODAY AND 
                            CreatedbyID= :userinfo.getUserId()]){
                                
                         

      amount += o.amount;
    }

    for(opportunity opp : op){
        amount += opp.amount;
        
        if(amount > 10000){
             opp.adderror('Amount is too high');
            
            
        }
    }
    }
}