({
	add : function(component) {
		
        var output = component.get("v.num1") + component.get("v.num2");
        component.set(Sum, "v.output" );
	}
})