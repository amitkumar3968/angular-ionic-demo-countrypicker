import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import {CountryselectorpagePage} from '../countryselectorpage/countryselectorpage';

import { File } from '@ionic-native/file';
import { Platform } from 'ionic-angular';

// declare let cordova: any;
/**
 * Generated class for the ButtonspagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buttonspage',
  templateUrl: 'buttonspage.html',
})
export class ButtonspagePage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams, 
    private toastCtrl: ToastController,
    public modalCtrl: ModalController,
    public plt: Platform,
    private file: File
    ) {
      

      this.plt.ready().then((readySource) => {
        console.log('Platform ready from', readySource);
        // Platform now ready, execute any required native code
        console.log(this.plt.platforms());
       // alert(this.plt.platforms());
       this.showtoast(this.plt.platforms());
      });

      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ButtonspagePage');
  }

  todo = {}
  checkboxstatus = true;
  email = '';
  userpassword = '';
  currentcountry = 'Country';
  logForm() {
    console.log(this.todo)
  }

  loginsubmitaction(){

    // if(!this.checkboxstatus){
    //   this.showtoast('Please Accept conditions.');
    //   return;
    // }
    // if (!this.ValidateEmail(this.email)){
    //   this.showtoast('Please Enter Valid Email.');
    //   return;
    // } 

    // if(this.userpassword.length <= 4){
    //   this.showtoast('Password should be greater than 4 Characters.');
    //   return;
    // }

    // go for login service.
 // send to next screen.
//  var parentDirectory     = cordova.file.externalRootDirectory;
//  var directoryToCreate   = 'testdir_ionic';
  // Make sure to change this to the directory name

  if(this.plt.is('ios')|| this.plt.is('android')){
 // on ios device
//  this.file.dataDirectory;

 this.file.writeFile(this.file.dataDirectory, 'test.csv', 'hello,world,', {replace: true}).then( () => {
  this.showtoast('file written');
  console.log(this.file.dataDirectory);
}
)
.catch( (err) => {
 console.error(err);
}

)
;
this.file.readAsText(this.file.dataDirectory,'test.csv').then(
(data) => {
this.showtoast(data);
console.log(data);
}
);

  }

   
     
    

}

  selectcountry(){
    let profileModal = this.modalCtrl.create(CountryselectorpagePage );
    profileModal.onDidDismiss(data => {
     if(data != null){
      console.log(data);
      this.showtoast("You choose " + data.country);
      this.currentcountry = data.country;
     }
    });
    profileModal.present();
  }

  showtoast(themessage){
    let toast = this.toastCtrl.create({
      message: themessage,
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

   ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    // alert("You have entered an invalid email address!")
    return (false)
}

}
