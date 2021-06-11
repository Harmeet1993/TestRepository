trigger Trgr3 on Lead (before update) {

leadclass.annualrevenue(trigger.new);

}