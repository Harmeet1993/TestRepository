({
	Calculate: function(component, event, helper) {
    
    var auracmp = component.find('childcmp');
    var message = auracmp.samplemethod('Hello', 'Aura');
  
	}
})