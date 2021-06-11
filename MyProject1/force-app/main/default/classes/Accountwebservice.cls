@RestResource(urlMapping='/api/Account/*')
Global class Accountwebservice{
 @HttpGet
    global static Account doGet(){
        Restrequest req= Restcontext.request;
        Restresponse res=Restcontext.response;
        
        string id=req.requestURI.substring(req.requestURI.lastindexof('/')+1);
        Account result=[SELECT id, name, phone, website FROM Account where ID=:id];
        
        return result;
        
       }
    
    @HttpPost
    
    global static string dopost(string name, string phone, string accountnumber){
        
        Account acc= new account();
        acc.name=name;
        acc.phone=phone;
        acc.Accountnumber=accountnumber;
        
        insert acc;
        return acc.id;
        
    }
    }