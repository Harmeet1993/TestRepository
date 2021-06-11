import { LightningElement } from 'lwc';

export default class Paginator extends LightningElement {

handleprevious(){

    
    this.dispatchEvent(new CustomEvent('previous'));
}


handlenext(){

    
    this.dispatchEvent(new CustomEvent('next'));
}

}