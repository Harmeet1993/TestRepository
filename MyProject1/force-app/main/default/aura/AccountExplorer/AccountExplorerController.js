({
	handleappevent : function(component, event, helper) {
   		
     var param = event.getParam('searchtext');
     var action = component.get('c.getaccounts');
        action.setParams ({ accountname : param  });
        action.setCallback(this, function(response) {
        var response = response.getReturnValue(); 
        component.set('v.accountlist', response );
});

$A.enqueueAction(action);


	}
})