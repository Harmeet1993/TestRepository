({
	doHandle : function(component, event, helper) {
   
    alert('Event successfull');
    var comp = event.getParam('conrecord');
    var contactlist= component.get('v.contacts');
        if(contactlist){
         contactlist.push(comp);
       component.set('v.contacts', contactlist);
}
    
        else{
        contactlist= [];
        contactlist.push(comp);
    component.set('v.contacts', contactlist);
    console.log('Result', contactlist);
        }	
	}
})