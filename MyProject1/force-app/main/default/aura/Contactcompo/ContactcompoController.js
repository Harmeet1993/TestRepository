({
	searchData : function(component, event, helper) {
	    var action = component.get('c.searchContact');
        action.setParams({contactName : component.get('v.searchkey') });
        action.setCallback(this, function(response){
        component.set('v.contactlist', response.getReturnValue());
        console.log(component.get('v.contactlist'));

})	
  
$A.enqueueAction(action);
	}
})