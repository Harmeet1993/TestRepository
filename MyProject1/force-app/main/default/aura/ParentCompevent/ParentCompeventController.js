({
	handleappevent : function(component, event, helper) {

    var msg = event.getParam("atr");
    component.set("v.message", msg );
		
	}
})