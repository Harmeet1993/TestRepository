public class Opportunitycalculators {

    public static void calculateopportunity(list<opportunity> newlist, list<opportunity> oldlist){
     
     set<id> accid = new set<id>();

        if(newlist!= null){
        for(opportunity opp : newlist){
        if(opp.Accountid != null){
        accid.add(opp.Accountid); 
}
}
}
 
        if(oldlist != null){
        for(opportunity opp : oldlist){
         accid.add(opp.accountid);
} 
}  

map<id, decimal> amountmap = new map<id, decimal>();

decimal total = 0;
 
  //opportunity opplist = [select id, amount from opportunity where id IN : accid];

        for(opportunity op : [select id, amount from opportunity where id IN : accid]){
        if(amountmap.containsKey(op.accountid)){
        total = amountmap.get(op.accountid);
}

        if(op.amount != null){
        total = total + op.amount;
}
      amountmap.put(op.accountid, total);      

 }

        list<account> acclist = new list<account>();
        for(id i : amountmap.keySet()){
        Account acc = new account();
        acc.id = i;
        acc.AnnualRevenue = amountmap.get(i);
        acclist.add(acc);
}

   update acclist;

}}