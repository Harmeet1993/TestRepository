({
	handleclick : function(component, event, helper) {
    alert("Success"); 
    var name = component.get('v.num1');
    var passwd = component.get('v.num2');
    alert(name);
   // alert(passwd);
    console.log('Numbers are' +name);
    //console.log('Numbers are' +passwd);
   var action = component.get('c.checkuser');
   action.setParams({conname : name });
   action.setCallback(this, function(response){
   var state = response.getState();
   if(state === 'SUCCESS'){
   alert('Record Retrieved');
}

})
    	


	}
})