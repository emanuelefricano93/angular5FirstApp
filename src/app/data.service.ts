import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})


export class DataService {

  private goals = new BehaviorSubject<any> (['The initial goal', 'Another silly life']);
  observableOfGoals = this.goals.asObservable();
  private mioarray = new BehaviorSubject<any>([]);
  observableOfMioArray = this.mioarray.asObservable();

  constructor() { }

  changeGoals (newGoals) {
    console.log("ciao sto per buttare un nuovo array questo sostituira il vecchio ");
    this.goals.next(newGoals);
  }
}
