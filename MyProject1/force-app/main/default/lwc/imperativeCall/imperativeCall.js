import { LightningElement } from 'lwc';
import getcontacts from '@salesforce/apex/Contactlistcontroller.getcontacts';

export default class ImperativeCall extends LightningElement {

contacts;
error;

handleclick(){

getcontacts().then(result => {

this.contacts=result;

})

.catch(error =>{

    this.error=error;
})

}





}