({
	handleSave : function(component, event, helper) {

    alert('Successfull');
    alert(component.get('v.Aspirant.Email__c'));
   // var aspirant = component.get('v.conRecord');
    //console.log('Aspirant is '+component.get('v.ConRecord'));
    var action = component.get('c.createcontact');
       // action.setParams({name : component.get('v.Aspirant.Name'), email:component.get('v.Aspirant.Email__c'), 
       //  passwd :component.get('v.Aspirant.Password__c') });
    action.setCallback(this, function(response){
    var state = response.getState();
    if(state === 'SUCCESS'){
    alert(component.get('v.Aspirant.Name'));
    alert('Record Saved');
}

})



 $A.enqueueAction(action);	
	
	}
})