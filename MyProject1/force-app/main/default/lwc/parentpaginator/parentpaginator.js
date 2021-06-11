import { LightningElement } from 'lwc';

export default class Parentpaginator extends LightningElement {

page =1;

previoushandler(){
if(this.page>1){

    this.page = this.page -1;
}}

nexthandler(){

    this.page = this.page + 1;
}


}