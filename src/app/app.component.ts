import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Constants } from './Constants/constants';

import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  appconstants = Constants;
  pageNum = Constants.Page_1;

  form_data!: any[];
  groupForm: FormGroup;
  //forms:FormGroup

  constructor(private builder: FormBuilder, private dataService: DataService) {
    this.groupForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.maxLength(2)]),
      phone: new FormControl('', [
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      email: new FormControl('', Validators.email),
      nationality: new FormControl(''),
      house: new FormControl(''),
      locality: new FormControl(''),
      city: new FormControl(''),
      country: new FormControl(''),
      feedback: new FormControl(''),
      bond: new FormControl(false),
    });

    // this.forms=this.builder.group({
    //   name:['',[Validators.required]],
    //   age:['',[Validators.required,Validators.maxLength(2)]],
    //   phone:['',[Validators.minLength(10),Validators.maxLength(10)]],
    //   email:['',Validators.email],
    //   nationality:[''],
    //   house:[''],
    //   locality:[''],
    //   city:[''],
    //   country:[''],
    //   feedback:['']

    // })
  }

  ngOnInit(): void {
    this.getdatafortable();
   
  }

  getdatafortable() {
    this.dataService.getdata().subscribe((data) => {
      this.form_data = data;
    });
  }

  pre(): void {
    this.pageNum -= 1;
  }

  next(): void {
    this.pageNum += 1;
    this.groupForm.controls['bond'].value;
  }

  done(): void {
    this.dataService.savedata(this.groupForm.value).subscribe((data) => {
      this.getdatafortable();
    });
    //console.log(this.groupForm.value)

    // console.log(this.forms.value)
    // this.dataService.savedata(this.forms.value).subscribe(data => {this.getdatafortable()});
    this.groupForm.reset();
    this.pageNum = 0;
    
  }
  delete(id: number) {
    this.dataService.delete(id).subscribe((x) => this.getdatafortable());
  }
  Steperchange(event: number) {
    this.pageNum = event;
  }
}
