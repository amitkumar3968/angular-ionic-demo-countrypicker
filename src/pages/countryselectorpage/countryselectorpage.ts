import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import {  ViewController } from 'ionic-angular';

import { File } from '@ionic-native/file';

/**
 * Generated class for the CountryselectorpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-countryselectorpage',
  templateUrl: 'countryselectorpage.html',
})
export class CountryselectorpagePage  implements OnInit {

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    public http: HttpClient,
    public viewCtrl: ViewController,
    private file: File
    ) {
  }
  ngOnInit(){
    this.http.get('https://gist.githubusercontent.com/amitkumar3968/957fa84c9c1a7ab774c65467a9fd371f/raw/9198640981e1664a0e3656ac3492dce1e7232c7d/countries.json',{responseType: 'text'})
    .subscribe(res => {  
      // console.log("HTTP RESPONSE:")
      // console.log(res)
       let data = JSON.parse(res) 
      console.log(data)
       this.allcountries = data;
       this.allcountries_search = data;

      // for (let dataIndex=0; dataIndex<data.length; dataIndex++) { 
      //   let newQuestion = new OralQuestion(data[dataIndex].module, data[dataIndex].section, data[dataIndex].questionText, data[dataIndex].answerText)
      //   this.questions.push(newQuestion)
      // }
    })
          alert(this.file.dataDirectory);
    this.file.checkDir(this.file.dataDirectory, 'mydir')
    .then(_ => console.log('Directory exists'))
    .catch(err => console.log('Directory doesn\'t exist'));

  }

  allcountries:any ;
  allcountries_search:any ;
  userpickedcountry;
  usersearch ;
  ionViewDidLoad() {
    console.log('ionViewDidLoad CountryselectorpagePage');

   

  }

  countrypicked(singleitem){
    // alert(singleitem.country);
    this.userpickedcountry = singleitem;
    this.viewCtrl.dismiss(this.userpickedcountry);

  }

  dismissmodal(){
    this.viewCtrl.dismiss();
  }

  onInput($event){
    // alert($event);
    // alert(this.usersearch);
    // this.allcountries
  //  console.log( Object.keys(this.allcountries));
  var tempstring = this.usersearch;
   this.allcountries_search = this.allcountries.filter( function(singlecountry)
   {
        var thecountry = singlecountry.country;
        // alert($event);
         return (thecountry.toLowerCase().indexOf(tempstring.toLowerCase()) !== -1);
        // return thecountry.localeCompare(tempstring, undefined, { sensitivity: 'base' }) === 0;
   });


  }
  onCancel($event){
    this.allcountries_search = this.allcountries;
  }

}
