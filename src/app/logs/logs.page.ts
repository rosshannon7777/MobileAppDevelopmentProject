import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.page.html',
  styleUrls: ['./logs.page.scss'],
})
export class LogsPage implements OnInit {

  wellnessSleep:string = "";
  wellnessEnergy:string = "";
  wellnessBody:string = "";
  wellnessMental:string = "";
  
  constructor(private navCtrl:NavController,private storage:Storage) { }
 
  ngOnInit() {
  }

   saveStatus(){
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

  nextPage(){
    this.navCtrl.navigateForward('/workout');
    }

    homePage(){
      this.navCtrl.navigateRoot('/home');
    }
}