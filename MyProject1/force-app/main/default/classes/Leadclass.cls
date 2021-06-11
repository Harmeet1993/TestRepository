public class Leadclass {

    public static void annualrevenue(list<lead> Leads){

        for(lead l : leads ){

            if(l.annualrevenue > 80000){
                
                l.adderror('amount is high');
            }
            
            
        }
        
        
        
    }

}