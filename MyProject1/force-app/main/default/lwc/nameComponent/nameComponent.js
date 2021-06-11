import { LightningElement, wire } from 'lwc';
import getcontacts from '@salesforce/apex/Contactlistcontroller.getcontacts';

export default class NameComponent extends LightningElement {

    contacts;
@wire(getcontacts) 
wiredcontact({data, error}){

    if(data){

        this.contacts=data;
    }

    if(error){

        this.error=error;
    }
}

}