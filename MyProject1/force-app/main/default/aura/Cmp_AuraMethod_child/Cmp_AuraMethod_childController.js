({
	doAction : function(component, event, helper) {

    var params = event.getParam('arguements');
        if(params){
         var param2 = params.param1;
         var param3 = params.param2;
         alert(param2 + "" +param3);
        console.log('v.param2', 'v.param3');
	     component.set('v.value1', param1);
         component.set('v.value2', param2); 
        }
	}
})