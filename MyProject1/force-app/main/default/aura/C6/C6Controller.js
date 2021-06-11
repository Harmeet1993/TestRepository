({
	doInit : function(component, event) {

   var act= component.get("c.searchaccount");
   act.setCallback(this,function(a){
   component.set("V.account", a.getReturnValue());
});
	
$A.enqueueAction(act);
	
	}
})