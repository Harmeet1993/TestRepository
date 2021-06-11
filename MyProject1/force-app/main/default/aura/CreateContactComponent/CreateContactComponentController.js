({
	doSave : function(component, event, helper) {

     var cmpevent= component.getEvent('compevent');
     var contactrecord = component.get('v.ContactRecord');
        cmpevent.setParams({conrecord : contactrecord  });
      cmpevent.fire();
		
	}
})