({
	doInit : function(component, event, helper) {
    
    component.set('v.columns', [
        {label: 'AccountName', fieldName: 'Name', type:'text'},
        {label: 'Industry', fieldName: 'Industry', type:'text'},
        {label: 'Phone', fieldName: 'Phone', type:'phone'}

]);

    var action=component.get('c.getaccounts');
        action.setCallback(this, function(response){
        var state= response.getState();
            if(state=== 'SUCCESS'){
         var responsevalue= response.getReturnValue();
         console.log('Response is', responsevalue);
         component.set('v.data', responsevalue);
} 

});

$A.enqueueAction(action);


		
	}
})