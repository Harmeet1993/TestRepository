({
	handlecompevent : function(component, event, helper) {

    alert('Parent Component');
    var searchparam = event.getParam('searchtext');
    var action = component.get('c.getaccounts');
        action.setParams({ Account_Name : searchparam });
        console.log('Account Name', searchparam);
        action.setCallback(this, function(response){  
        var state= response.getState();
            if(state === 'SUCCESS'){
         component.set('v.Account', response.getReturnValue());
}

});

$A.enqueueAction(action);
		
	}
})