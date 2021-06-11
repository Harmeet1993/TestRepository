@isTest

private class Trg1_Testclass{

static testmethod void mytest(){

Account ac = new account();
ac.Name = 'Amit Bhandari';
ac.phone = '080282020';
ac.fax = '232527';
insert ac;

}
}