import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FileService } from '../file.service';

@Component({
  selector: 'app-after-upload',
  templateUrl: './after-upload.component.html',
  styleUrls: ['./after-upload.component.css']
})
export class AfterUploadComponent implements OnInit {

  expand_Product=false;
  expand_green_pts_brkup=false;
  expand_insights=false;
  fileName: any;
  Green_pts:number=0;
  ESG: number[]=[];
  Discovery: number[]=[];
  Product: string[]=[];

  constructor(private file: FileService, private http: HttpClient) { }

  ngOnInit(): void {
    this.fileName=this.file.set();
     this.http.post("localhost:5000/Score_bill",this.fileName).subscribe((data: any)=>
     {
       this.ESG[0]=data['esg'];
       this.Discovery[0]=data['senti'];
       this.Green_pts=data['green_points'];
     })
     this.http.post("localhost/products_detected", this.fileName).subscribe((data: any)=>
     {
       this.Product[0]=data['name_pro'];
     })

    



  }
  expandProduct()
  {
    this.expand_Product=!this.expand_Product;
    if(this.expand_Product){
      this.expand_green_pts_brkup=false;
      this.expand_insights=false;
    }
  }

  expandGreenPoints() 
  { 
    this.expand_green_pts_brkup=!this.expand_green_pts_brkup;
    if (this.expand_green_pts_brkup){
      this.expand_Product=false;
      this.expand_insights=false;
    }
  }

  expandInsights()
  {
    this.expand_insights=!this.expand_insights;
    if(this.expand_insights){
      this.expand_Product=false;
      this.expand_green_pts_brkup=false;
    }
  }
}




