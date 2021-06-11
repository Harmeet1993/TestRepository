({
	doInit : function(component, event, helper) {

        component.set('v.columns', [
            {label : 'AccountName' , fieldName:'Name', type: 'text'},
            {label : 'Industry' , fieldName:'Industry', type: 'text'},
            {label : 'Rating' , fieldName:'Rating', type: 'text'},  
            {label : 'Phone' , fieldName:'Phone', type: 'text'}
]);

            var action= component.get('c.getaccount');
            action.setCallback(this, function(response){
            var state = response.getState();
            alert(state);
            component.set('v.data', response.getReturnValue());
            console.log('Return Value', response.getReturnValue());

});

$A.enqueueAction(action);



		
	}
})