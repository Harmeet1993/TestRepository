public class C2 {

   list<account> acts = new list<account>();

    public list<account> getacts(){
        
        return acts;
    }

    public pageReference other(){
        
        acts = [SELECT Name, Type, industry FROM Account WHERE Type = 'Customer - Channel'];
        return null;

    }

    public pagereference customer(){
        
      acts = [SELECT Name, Type, industry FROM Account WHERE Type = 'Customer-Direct'];

      return null;
        
    } 
}