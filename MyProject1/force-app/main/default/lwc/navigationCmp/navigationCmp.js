import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'

export default class NavigationCmp extends LightningElement {


    navigate(){

        let pageref = { type:'standard_objectpage',
                        attributes: {actionName: 'list' ,
                                     objectApiName: 'Account'} }


   this[NavigationMixin.navigate](pageref, true);
                                         
    }

}