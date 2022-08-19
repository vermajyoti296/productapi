import { Component, OnInit } from '@angular/core';
import { ProductapiService } from '../productapi.service';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  sn:any;
  image:any;
  title:any;
   price:any;
   rating:any;
  constructor(private http:ProductapiService) { }
  submit(){
    var body={
      sn:this.sn,
      image:this.image,
      title:this.title,
      price:this.price,
      rating:this.rating
    }
    console.warn(body);
    this.http.saveUsers('products/add',body).subscribe((result)=>{
      console.warn(result);    
    })
  }

  ngOnInit(): void { }

}
