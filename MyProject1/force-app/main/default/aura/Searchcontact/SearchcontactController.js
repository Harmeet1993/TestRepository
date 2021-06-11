({
	 searchData : function(component, event, helper) {
        alert(component.get("v.searchKey"));
        var action = component.get("c.searchContact");
        action.setParams({ contactName : component.get("v.searchKey") });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                alert('success');
                component.set("v.contactList",response.getReturnValue());
                console.log(component.get("v.contactList"));
            }
            else if (state === "INCOMPLETE") {
                // do something
            }
                 else if (state === "ERROR") {
                    var errors = response.getError();
                    if (errors) {
                        if (errors[0] && errors[0].message) {
                            console.log("Error message: " +
                                        errors[0].message);
                        }
                    } else {
                        console.log("Unknown error");
                    }
                }
        });
        $A.enqueueAction(action);
     
		
	}
})