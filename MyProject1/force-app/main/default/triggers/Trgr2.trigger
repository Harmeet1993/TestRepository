trigger Trgr2 on Lead (before insert, before update) {

    for(lead l : trigger.new){

        if(trigger.isinsert & l.AnnualRevenue==0){
            
            l.AnnualRevenue = 2500;
        }
     
        if(trigger.isupdate & l.AnnualRevenue!=0){
            
            l.AnnualRevenue = 95000;

        }
    }
}