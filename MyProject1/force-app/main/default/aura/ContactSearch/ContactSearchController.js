({
	doSearch : function(component, event, helper) {
     
    var componentevent = component.getEvent('ContactEvent');
    var searchparam = component.find('searchInput').get('v.value');	
        componentevent.setParams({
            searchtext : searchparam

});	
 
   componentevent.fire();
	}
})