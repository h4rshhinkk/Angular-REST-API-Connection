import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DjangoService {

  constructor(private http:HttpClient) { }

  fnviewemployee(data:any){
    console.log(data)
    return this.http.get('http://127.0.0.1:8000/employee/')
  }

  


}