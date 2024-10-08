import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})



export class EventEmitterService {

  private static emitters: {
    [NomeDoEvento: string]: EventEmitter<any>
  } = {}

  static get(NomeDoEvento:string):EventEmitter<any>{
    if(!this.emitters[NomeDoEvento])

      this.emitters[NomeDoEvento]= new  EventEmitter<any>();

    return this.emitters[NomeDoEvento];
  }

  static emit(NomeDoEvento:string, event:any) {
    const emitter = this.get(NomeDoEvento);
    if (emitter) {
      emitter.emit(event);
    }
  }






}
