({
    doInit : function(component, event) {
             alert('Test');
              var action = component.get("c.getcontactlist");
              
              action.setCallback( this, function(response) {
              var state = response.getState();
                  if (state === "SUCCESS") {
                       component.set("v.contact", response.getReturnValue());
                       console.log(response.getReturnValue());
                  }
              });
        $A.enqueueAction(action);
    },
})