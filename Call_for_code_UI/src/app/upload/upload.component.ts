import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileService } from '../file.service';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  if_uploaded: boolean=false;
  search_product:string='';
  ESG: number=0;
  Discovery: number=0;

  constructor(private file: FileService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  upload(e: any){
    this.if_uploaded=true;
    //console.log(e.target.files[0].name)
    this.file.get(e.target.files[0]);

    this.router.navigate(['/After']);
  }

  search_text(e: any){
    this.search_product=e.target.value;
  }

  onSubmit(){
    this.http.post("localhost:5000/Score_search",this.search_product).subscribe((data: any)=>
    {
      this.ESG=data['esg'];
      this.Discovery=data['senti']

    })


  }

}
