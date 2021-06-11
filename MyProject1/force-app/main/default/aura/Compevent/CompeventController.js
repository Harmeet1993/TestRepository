({
	doInit : function(component, event, helper) {

        var appevent = $A.get("e.c:Event1");
        appevent.setParams({ "atr" : "Lightning Event is successfull"});
       appevent.fire();
		
	}
})