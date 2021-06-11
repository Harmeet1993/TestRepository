({
	handleCompEvent : function(component, event, helper) {
    
     var searchparam = event.getParam('searchtext');
     var action = component.get('c.searchContact');
        action.setParams({ contactName : searchparam });
        action.setCallback(this, function(response){
        var responseValue = response.getReturnValue();
        console.log('Response Value', responseValue);
        component.set('v.contactlist', responseValue )

}); 

$A.enqueueAction(action);
     
     
		
	}
})