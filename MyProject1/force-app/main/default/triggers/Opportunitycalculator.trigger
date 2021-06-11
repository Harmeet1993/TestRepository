trigger Opportunitycalculator on Opportunity (after insert, after update, after delete) {

    if(Trigger.isAfter){
    if(Trigger.isInsert || Trigger.isUpdate || Trigger.isdelete){
     Opportunitycalculators.calculateopportunity(trigger.new, trigger.old);

}
}


}