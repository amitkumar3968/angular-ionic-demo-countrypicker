import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {ButtonspagePage} from '../buttonspage/buttonspage';
import {AlertpagePage} from '../alertpage/alertpage';
import {CardpagePage} from '../cardpage/cardpage';
import {InputpagePage} from '../inputpage/inputpage';
import {ToastpagePage} from '../toastpage/toastpage';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

 

  items_array = new Array();
  arraylength = this.items_array.push( 
                        {'name':'Buttons' , 'desc':'Buttons-- few types of buttons'},
                        {'name':'Cards', 'desc':'Cards-- few types of Cards'},
                        {'name':'Alert', 'desc':'Alert-- few types of Alert'},
                        {'name':'Input', 'desc':'Input-- few type'},
                        {'name':'Toast', 'desc':'Toast-- few type'}
                         );

singleitemclicked(thevalue){
              // alert(thevalue.name);   
             var arrayindex   = this.items_array.indexOf(thevalue);            

             switch (arrayindex) {
               case 0 :
              this.navCtrl.push(ButtonspagePage);
               break;
               case 1 :
               this.navCtrl.push(CardpagePage);
               break;
               case 2 :
               this.navCtrl.push(AlertpagePage);               
               break;
               case 3 :
               this.navCtrl.push(InputpagePage);
               break;
               case 4 :
               this.navCtrl.push(ToastpagePage);
               break;

               default :
               this.navCtrl.push(ToastpagePage);
               break;
             }



} 

}
