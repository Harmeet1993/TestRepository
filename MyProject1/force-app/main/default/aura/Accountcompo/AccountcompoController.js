({
	doSearch : function(component, event, helper) {
		
        var action= component.get('c.getaccount');
        action.setParams({AccountName : component.get('v.searchkey')});
        action.setCallback(this, function(response){
        component.set('v.Accountlist', response.getReturnValue());
        console.log(component.get('v.Accountlist'));
        })

 $A.enqueueAction(action);

	}
})