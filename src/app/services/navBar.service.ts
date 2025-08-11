import { Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {

  private _stateBtn: WritableSignal<boolean> = signal<boolean>(false);
  public readonly stateBtn: Signal<boolean> = this._stateBtn.asReadonly();

  constructor() { }

  setStateBtn(state: boolean){
    this._stateBtn.set(state);
    console.log(this.stateBtn());
  }

}
