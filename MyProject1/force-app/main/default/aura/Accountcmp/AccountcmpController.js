({
	doSearch : function(component, event, helper) {

 var cmp = component.get('v.AccName');
 console.log('Account name', cmp);
 var action = component.get('c.getnewaccount');
        action.setParams({ Acc_Name : cmp});
        action.setCallback(this, function(response){
        var state = response.getState();
        console.log('State is', state);
            if(state == SUCCESS){ 
        component.set('v.Accountrec', response.getReturnValue());
        console.log("Account is", 'v.Accountrec');
           

            }
        });

 $A.enqueueAction(action);
		
	}
})