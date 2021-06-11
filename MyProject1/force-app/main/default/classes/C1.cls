public class C1 {
    
     public list<account> getprospect(){
        
        return [SELECT Name, Type, industry
                       FROM Account 
                       WHERE type = 'Prospect'];
    }
    public list<account> getOther(){
        
        return [SELECT Name, Type, industry
                        FROM Account 
                        WHERE Type = 'Other']; 
    }
}