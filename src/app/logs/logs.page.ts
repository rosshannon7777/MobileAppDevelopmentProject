import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AlertController, NavController } from '@ionic/angular';
import { alertController } from '@ionic/core';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.page.html',
  styleUrls: ['./logs.page.scss'],
})
export class LogsPage implements OnInit {

  // variables
  wellnessSleep:string = "";
  wellnessEnergy:string = "";
  wellnessBody:string = "";
  wellnessMental:string = "";
  
  constructor(private navCtrl:NavController,
    private storage:Storage,
    private alertController: AlertController) { }
 
  ngOnInit() {
  }

  // saving the buttons clicked 
  // alert method to tell you when data is saved
  // MERITS ATTENTION
 async  saveStatus(){
  const alert = await  this.alertController.create({
    header: 'ALERT!',
    subHeader: 'Your wellness data has been saved to the main menu',
    buttons:['Ok']
  })
  await alert.present();
     
    this.storage.create()
    .then(()=>{
      this.storage.set("sleep", this.wellnessSleep)
      .then(()=>{console.log(this.wellnessSleep)})
      .catch();
      this.storage.set("energy", this.wellnessEnergy)
      .then(()=>{console.log(this.wellnessEnergy)})
      .catch();
      this.storage.set("body", this.wellnessBody)
      .then(()=>{console.log(this.wellnessBody)})
      .catch();
      this.storage.set("mental", this.wellnessMental)
      .then(()=>{console.log(this.wellnessMental)})
      .catch();
    })
    .catch();
  }

  // navigation buttons
  nextPage(){
    this.navCtrl.navigateForward('/workout');
    }

    homePage(){
      this.navCtrl.navigateRoot('/home');
    }
}