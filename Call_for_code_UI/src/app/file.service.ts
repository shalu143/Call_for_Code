import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {
    fileName: any;

  constructor() { }

  get(res: any){
    this.fileName=res;

  }
  set(){
    {
      return this.fileName
    }
  }



}
