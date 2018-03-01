import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public loginForm: any;
  wrongDetails:boolean = true;
  rootPage:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  private formBuilder : FormBuilder) {
    this.loginForm = this.formBuilder.group(
      {
        email : ["",[Validators.required]],
        password: ["",Validators.required]
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  public matchPaterrn() {
    return this.loginForm.value.email == "karthikgoud.s" &&  this.loginForm.value.password == "Sairam@1234"?true:false;
  }
onSubmit(){
  if(this.loginForm.valid){
    console.log(this.loginForm.value.email);
  
    if(this.matchPaterrn()){
      this.wrongDetails = true;
      console.log("login succesful");
     this.navCtrl.push( "ListOfMoviesPage");
    }
    else {
      console.log("login unsuccesful");
      this.wrongDetails = false;
    }
  }
  else {
    console.log("invalid Details");
  }
}
}
