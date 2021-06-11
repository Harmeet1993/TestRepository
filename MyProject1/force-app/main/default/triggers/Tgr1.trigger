trigger Tgr1 on Lead (before update) {

    for(lead l : trigger.new){
        
        if(trigger.oldmap.get(l.id).AnnualRevenue!= l.AnnualRevenue){
            
            l.Phone = '9123106440';
        }
    }

}