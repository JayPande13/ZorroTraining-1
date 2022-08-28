import { Component,  Input,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Constants } from 'src/app/Constants/constants';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  appconstants=Constants
@Input() feedform:FormGroup;
agreement:boolean=false;
  constructor(private builder:FormBuilder) { 
    //this.feedform=this.builder.group({})
    this.feedform = new FormGroup({})
    this.agreement=false;
  }

  ngOnInit(): void {
   
  this.agreement=this.feedform.controls['bond'].value
    if(this.agreement){
      console.log(this.agreement)
      this.feedform.controls['feedback'].enable();

    }
    else{
      this.feedform.controls['feedback'].disable();

    }
  }

  

}
