import { Component, OnInit } from '@angular/core';
import { ProductapiService } from '../productapi.service';

@Component({
  selector: 'app-getdel',
  templateUrl: './getdel.component.html',
  styleUrls: ['./getdel.component.css']
})
export class GetdelComponent implements OnInit {
   users:any;
  constructor(private http:ProductapiService) { 
    this.getdata();
  }
  getdata(){
    this.http.users('products').subscribe((data)=>{
      console.log(data);
      this.users=data;
    });
  }
  remove(id:any){
    this.http.delete('products/',id).subscribe((data)=>{
     console.warn(data);
    })
   }
  ngOnInit(): void {
  }

}
