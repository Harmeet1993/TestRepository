import { LightningElement, wire } from 'lwc';
import getcontacts from '@salesforce/apex/Contactlistcontroller.getcontacts';

export default class SearchLwc extends LightningElement {

    searchvalue;
    searchcontact;
    contacts;

    handlechange(event){

        this.searchcontact = event.target.value;
    }

@wire(getcontacts, {str : '$searchcontact' }) contacts;


}