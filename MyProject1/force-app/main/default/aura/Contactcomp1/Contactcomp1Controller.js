({
	dosearch : function(component, event, helper) {

    var action = component.get('c.getcontacts');
        action.setParams({conname : component.get('v.con')});
        action.setCallback(this, function(response){
        component.set('v.Contactlist', response.getReturnValue());
})

 $A.enqueueAction(action);
		
	}
})