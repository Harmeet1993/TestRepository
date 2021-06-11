({
	createModal : function(component, event, helper) {
  
        component.find('overlayLib').showCustomModal({
            header : "Application Modal",
            body: "This is a test",
            footer: "Cancel",
            showcloseButton : true

});
		
	},

    Navigate : function(component, event, helper) {
     var pageReference= component.find('navigation');
     var pageRef ={
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'list',
            },
           state: {
                filterName: "MyAccounts"
            }
        };
       
   pageReference.navigate(pageRef); 
    }
})