import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private emit = new EventEmitter<void>()
  constructor() { }

  retrieveEmitter(): EventEmitter<void>{
    return this.emit
  }

  sendMessage() {
    this.emit.emit()
  }
}
