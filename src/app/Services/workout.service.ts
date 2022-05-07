import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private httpClient:HttpClient) { }

  getWorkoutData():Observable<any>{
    return this.httpClient.get('https://jsonblob.com/api/jsonblob/972468963191832576');
   }

}
