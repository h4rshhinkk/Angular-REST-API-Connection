import { Component } from '@angular/core';
import { DjangoService } from './services/django.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularproj';
  dataList :any;
  constructor(public DjangoService: DjangoService) { }
  
  sampleFunction(data:any) {
    this.DjangoService.fnviewemployee(data).subscribe((response) => {
      console.log(response);
      this.dataList = response 
 
    }, (error) => {
      console.log(error);
     
    });
  }

}

