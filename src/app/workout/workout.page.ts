import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { alertController } from '@ionic/core';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.page.html',
  styleUrls: ['./workout.page.scss'],
})
export class WorkoutPage {

  //variables
  upperBody:String = "";
  lowerBody:String = "";
  cardio:String = "";
  recovery:String = "";

  constructor(private navCtrl:NavController,
    private storage:Storage,
    private alertController: AlertController) { }

   ngOnInIt(){
    
  }
  
  // saving data that was clicked to the console
  // MERITS ATTENTION
  async saveStatus(){
  const alert = await  this.alertController.create({
      header: 'ALERT!',
      subHeader: 'Your workout data has been saved to the main menu',
      buttons:['OK']
    })
    await alert.present();

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

  // navagtion buttons
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
