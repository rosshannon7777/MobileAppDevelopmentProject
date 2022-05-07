import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Logs } from 'selenium-webdriver';
import { NgForm } from '@angular/forms';
import {WorkoutService} from '../Services/workout.service';
import { Health } from '@awesome-cordova-plugins/health';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

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

  workouts:any = [];

  constructor(private navCtrl:NavController, private storage:Storage, private workoutService:WorkoutService,private health: Health) {}

  ngOnInIt(){
    this.workoutService.getWorkoutData().subscribe( 
      (data)=>{
        this.workouts = data.workouts1;
        console.log(this.workouts);
    } );
  }

    Health(){
    this.health.isAvailable()
  .then((available:boolean) => {
    console.log(available);
    this.health.requestAuthorization([
      'distance', 'nutrition',  //read and write permissions
      {
        read: ['steps'],       //read only permission
        write: ['height', 'weight']  //write only permission
      }
    ])
    .then(res => console.log(res))
    .catch(e => console.log(e));
  })
  .catch(e => console.log(e));}

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

   
   login(){
    this.navCtrl.navigateForward('/logs');
    }

    workout(){
      this.navCtrl.navigateForward('/workout');
    }

    aboutus(){
      this.navCtrl.navigateForward('/aboutus');
    }

    // data binding
    sucess(){
      if(this.hidden == true){
        this.hidden = false;
      } else {
        this.hidden = true;
      }
    }
    
  }

  

