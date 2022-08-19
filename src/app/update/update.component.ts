import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductapiService } from '../productapi.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  updatedata: FormGroup;
  form: any;
  images:any;
  constructor(private router: ActivatedRoute, private http: ProductapiService) { 
    this.updatedata = new FormGroup({
    id: new FormControl(''),
    image: new FormControl(''),
    title: new FormControl(''),
    price: new FormControl(''),
    rating: new FormControl({value:'',disabled:true})
  })
}

  ngOnInit(): void {
    console.warn(this.router.snapshot.params['id']);
    this.http.users('products/' + this.router.snapshot.params['id']).subscribe((result) => {
    console.warn(result);
    this.updatedata.patchValue(result);
    })
  }
  update() {
    // console.warn(this.abc.value)
    this.http.update('products/', this.router.snapshot.params['id'], this.updatedata.value).subscribe((result) => {
      console.warn(result);
    })
  }

}
