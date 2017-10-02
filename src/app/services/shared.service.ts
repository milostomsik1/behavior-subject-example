import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SharedService {

  isLogged$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isAdmin$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }
}
