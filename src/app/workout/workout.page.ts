import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import {HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-workout',
  templateUrl: './workout.page.html',
  styleUrls: ['./workout.page.scss'],
})
export class WorkoutPage {

  

  upperBody:String = "";
  lowerBody:String = "";
  cardio:String = "";
  recovery:String = "";

  constructor(private navCtrl:NavController,private storage:Storage) { }

   ngOnInIt(){
    
  }
  

  saveStatus(){
    this.storage.create()
    .then(()=>{
      this.storage.set("ubody", this.upperBody)
      .then(()=>{console.log(this.upperBody)})
      .catch();
      this.storage.set("lbody", this.lowerBody)
      .then(()=>{console.log(this.lowerBody)})
      .catch();
      this.storage.set("cardio", this.cardio)
      .then(()=>{console.log(this.cardio)})
      .catch();
      this.storage.set("recovery", this.recovery)
      .then(()=>{console.log(this.recovery)})
      .catch();
    })
    .catch();
  }

  nextPage(){
    this.navCtrl.navigateForward('/aboutus');
    }

  homePage(){
    this.navCtrl.navigateRoot('/home');
  }

  aboutus(){
    this.navCtrl.navigateForward('/aboutus');
  }

}
