import { LightningElement, wire } from 'lwc';
import getcontacts from '@salesforce/apex/Contactlistcontroller.getcontacts';


const columns = [
                        {label:'First Name', fieldName: 'FirstName', type:'text'}, 
                        {label:'Last Name', fieldName: 'LastName', type:'text'},
                        {label:'Email', fieldName:'Email', type:'text'}, 
                        {label:'Phone', fieldName:'Phone', type:'phone'} ];




export default class MyLwc2 extends LightningElement {

error;
columns= columns;

@wire(getcontacts) contacts;



}