import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Constants } from 'src/app/Constants/constants';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  appconstants = Constants
  @Input() addForm:FormGroup
  countries:[]=[]
  constructor(private builder:FormBuilder) {
    
    this.addForm = new FormGroup({})
    //this.addForm=this.builder.group({})
   }

  ngOnInit(): void {
  }

}
