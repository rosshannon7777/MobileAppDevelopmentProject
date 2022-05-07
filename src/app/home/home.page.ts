import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import {WorkoutService} from '../Services/workout.service';
import { Flashlight } from '@ionic-native/flashlight/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  // variables
  wellnessSleep:string = "";
  wellnessEnergy:string = "";
  wellnessBody:string = "";
  wellnessMental:string = "";
  upperBody:String = "";
  lowerBody:String = "";
  cardio:String = "";
  recovery:String = "";

  // data binding
  hidden = true;

  // array for json
  workouts:any = [];

  constructor(private navCtrl:NavController, private storage:Storage, private workoutService:WorkoutService,private flashlight: Flashlight) {}

  // method for json blob
  ngOnInIt(){
    this.workoutService.getWorkoutData().subscribe( 
      (data)=>{
        this.workouts = data.workouts1;
        console.log(this.workouts);
    } );
  }

  // method for flashlight to be used
  Flashlight(){
    this.flashlight.toggle();
  }

  // making the data transferable to another page
  ionViewDidEnter(){
    this.storage.create()
      .then(()=>{
        this.storage.get('sleep')
        .then((sleep)=>{
          this.wellnessSleep = sleep;
        })
        .catch();
        this.storage.get('energy')
        .then((energy)=>{
          this.wellnessEnergy = energy;
        })
        .catch();
        this.storage.get('body')
        .then((body)=>{
          this.wellnessBody = body;
        })
        .catch();
        this.storage.get('mental')
        .then((mental)=>{
          this.wellnessMental = mental;
        })
        .catch();
        this.storage.get('ubody')
        .then((ubody)=>{
          this.upperBody = ubody;
        })
        .catch();
        this.storage.get('lbody')
        .then((lbody)=>{
          this.lowerBody = lbody;
        })
        .catch();
        this.storage.get('cardio')
        .then((cardio)=>{
          this.cardio = cardio;
        })
        .catch();
        this.storage.get('recovery')
        .then((recovery)=>{
          this.recovery = recovery;
        })
        .catch();
      })
      .catch();
    }

    // data binding
    sucess(){
      if(this.hidden == true){
        this.hidden = false;
      } else {
        this.hidden = true;
      }
    }

   // methods of navigation to and from certain pages
   login(){
    this.navCtrl.navigateForward('/logs');
    }

    workout(){
      this.navCtrl.navigateForward('/workout');
    }

    aboutus(){
      this.navCtrl.navigateForward('/aboutus');
    }

  }

  

