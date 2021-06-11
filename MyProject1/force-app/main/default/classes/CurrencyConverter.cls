public class CurrencyConverter {
    
    public static decimal convertcurrency(Decimal eur){
        
       Decimal inr = 0.0;
        Http h = new Http();
        HttpRequest Request = new HttpRequest();
        Request.setEndpoint('https://api.exchangeratesapi.io/latest');
        Request.setMethod('GET');
        HttpResponse res = h.send(request);
       Map<string, object> jsonbody = (Map<string, object>)JSON.deserializeuntyped(res.getBody());
       Map<string, object> M = (Map<string, object>) jsonbody.get('rates');
      Decimal conversion = (Decimal) M.get('USD');
        inr = eur * conversion; 
        return inr;
      
    }

}