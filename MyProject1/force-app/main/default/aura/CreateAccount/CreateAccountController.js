({
	doSave : function(component, event, helper) {
	var cmpevent = component.getEvent('cmpevent');
    var name= component.get('v.fname');
    cmpevent.setParams({ acc : name });	
    console.log('Name is', name);
    cmpevent.fire();
	}
})