({
	doSearch : function(component, event, helper) {
     
    var componentevent = component.getEvent('AccountEvent');
    var searchparam = component.find('searchInput').get('v.value');	
        componentevent.setParams({
            searchtext : searchparam

});	
 
   componentevent.fire();
	}
})