import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlaobalVariableService {

  private Data : BehaviorSubject<any> = new BehaviorSubject<object>(null);
  sharedData = this.Data.asObservable();

  constructor() { }


  setData(value){
    this.Data.next(value);
}
}
