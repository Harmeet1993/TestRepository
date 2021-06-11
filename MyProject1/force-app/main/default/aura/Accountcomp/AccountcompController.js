({
	dohandle : function(component, event, helper) {

    
    var searchparam = component.get('v.searchparam');
    var compevent = component.getEvent('accevent');
    console.log('Text is', searchparam);
        compevent.setParams({ searchtext : searchparam });
        
      compevent.fire();
		
	}
})