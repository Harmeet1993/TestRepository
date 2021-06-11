({
	doInit : function(component, event, helper) {

     var action = component.get('c.getcontacts');
        action.setParams({'Account_Id': component.get('v.recordId'),});
        action.setCallback(this, function(a) {
        var state= a.getState();
        if(state == "SUCCESS"){
        var action= component.set('v.contact', a.getReturnValue());       
                
            }
 
       console.log('Responsevalue', + a.getReturnValue());
});
   $A.enqueueAction(action);

        },

   dosearch : function(component, event, helper) {

   var eventsource = event.getSource();
   var id = eventsource.get('v.name');
    var navEvt = $A.get("e.force:navigateToSObject");
    navEvt.setParams({
      "recordId": "id",
      "slideDevName": "detail"
    });
    navEvt.fire();


   }
		
	
})