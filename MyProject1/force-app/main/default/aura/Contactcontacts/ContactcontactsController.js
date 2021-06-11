({
	doHandle : function(component, event, helper) {
     var param = event.getParam('conrecord');
     alert('Record Saved');
     console.log(param);
     component.set('v.Contactlist', param);		

	}
})