({
    doInit: function(component, event, helper) {
        // Prepare a new record from template
        component.find("contactRecordCreator").getNewRecord(
            "Contact", // sObject type (objectApiName)
            null,      // recordTypeId
            false,     // skip cache?
            $A.getCallback(function() {
                var rec = component.get("v.newContact");
                var error = component.get("v.newContactError");
                if(error || (rec === null)) {
                    console.log("Error initializing record template: " + error);
                    return;
                }
                console.log("Record template initialized: " + rec.apiName);
                alert('Component Initiated');
            })
        );
    },

    handleSaveContact: function(component, event, helper) {
               alert('Component Saved');
               component.find("contactRecordCreator").saveRecord(function(saveResult) {
                if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                    // record is saved successfully
                    var resultsToast = $A.get("e.force:showToast");
                    resultsToast.setParams({
                        "title": "Saved",
                        "message": "The record was saved."
                    });
                    resultsToast.fire();
 
                } else if (saveResult.state === "INCOMPLETE") {
                    // handle the incomplete state
                    console.log("User is offline, device doesn't support drafts.");
                } else if (saveResult.state === "ERROR") {
                    // handle the error state
                    console.log('Problem saving contact, error: ' + JSON.stringify(saveResult.error));
                } else {                    
            console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
                          }
            });
        },

    handleDeleteRecord: function(component, event, helper) {
        alert('Component Deleted');
        component.find("contactRecordCreator").deleteRecord(function(deleteResult) {
            // NOTE: If you want a specific behavior(an action or UI behavior) when this action is successful 
            // then handle that in a callback (generic logic when record is changed should be handled in recordUpdated event handler)
            if (deleteResult.state === "SUCCESS" || deleteResult.state === "DRAFT") {
                // record is deleted
                console.log("Record is deleted.");
            } else if (deleteResult.state === "INCOMPLETE") {
                console.log("User is offline, device doesn't support drafts.");
            } else if (deleteResult.state === "ERROR") {
                console.log('Problem deleting record, error: ' + JSON.stringify(deleteResult.error));
            } else {
                console.log('Unknown problem, state: ' + deleteResult.state + ', error: ' + JSON.stringify(deleteResult.error));
            }
        });

    }
})