({
	
        callAuraMethod : function(component, event, helper) {
        //Call Child aura method
        var childComponent = component.find("childCmp");
        var message = childComponent.childMessageMethod('Happy Coding','Readers');
		
	}
})