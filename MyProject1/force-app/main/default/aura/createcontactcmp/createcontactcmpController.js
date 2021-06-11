({
	doSave : function(component, event, helper) {

    var cmpevent=component.getEvent('compevent');
        cmpevent.setParams({ conrecord : component.get('v.contactrecord')});
      cmpevent.fire();
		
	}
})