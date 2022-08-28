import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Constants } from 'src/app/Constants/constants';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
 
  public appconstants = Constants;
  nationality:string[]=[];
  @Input() dataForm:FormGroup;

  constructor(private builder:FormBuilder) { 
    this.nationality=["Indian", "American", "Others"]
   
    this.dataForm = new FormGroup({})
    // this.dataForm=this.builder.group({})
  }
  

  ngOnInit(): void {
    
  }
 
}
