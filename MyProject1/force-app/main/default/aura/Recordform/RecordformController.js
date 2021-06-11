({
    CreateContact : function(component, event, helper) {
        var CreateRecord = $A.get('e.force:createRecord')
        CreateRecord.setParams({ "entityApiName" : "Contact" ,
                                "defaultFieldValues" : {'Email': 'Msdhoni@gmail.com', 'Phone' : '9123106440' } 

});
        CreateRecord.fire();
}
})