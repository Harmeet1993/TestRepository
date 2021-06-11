import { LightningElement } from 'lwc';

const total = 3;


export default class MyLwc1 extends LightningElement {

    get numb(){

        const numb=[];
        for( var i=0; i<total; i++){

            numb.push({  value: `${i}`, label: `Item ${i}`, content: `content ${i}`,  });

           
        }

        return numb;
    }



 

}