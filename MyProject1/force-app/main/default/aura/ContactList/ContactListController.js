({
	doInit : function(component, event, helper) {
        var action = component.get('c.getcontacts'); 
        // method name i.e. getEntity should be same as defined in apex class
        // params name i.e. entityType should be same as defined in getEntity method
      
       action.setCallback(this, function(a){
            var state = a.getState(); // get the response state
            if(state == 'SUCCESS') {
                component.set('v.contactlist', a.getReturnValue());
            
}
          console.log('ReturnValue', a.getReturnValue());
           });
        $A.enqueueAction(action);
    }
})