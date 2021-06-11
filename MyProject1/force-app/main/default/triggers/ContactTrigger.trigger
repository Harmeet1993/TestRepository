trigger ContactTrigger on Contact (after insert, after update, after delete) {

    if(Trigger.isAfter){
        if(Trigger.isinsert || Trigger.isupdate || Trigger.isdelete){
        Contacthandler.countcontact(trigger.new, trigger.old);

}
}



}