({
	doHandle : function(component, event, helper) {
     alert('Parent Component success');
     var cmp = event.getParam('acc');
     console.log('Name', cmp);
     component.set('v.FirstName', cmp );
   
		
	}
})