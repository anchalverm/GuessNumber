import { Component,OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent implements OnInit  {
  entered_Number:any;
generted_Number:any;
isNumberGenerated: boolean = false;
  constructor(private toastr: ToastrService){ 

  }
  ngOnInit(): void {
    
  }
  onClickSubmit(result:any) {
    console.log("You have entered : " + result.usernumber); 
    this.entered_Number = result.usernumber;
    if (!this.isNumberGenerated) {
      this.toastr.error("Please first click the 'Generate random number' button.");
    } else if (this.entered_Number === '') {
      this.toastr.error("Please enter a number first.");
    }
    else{
    if(this.generted_Number==this.entered_Number){
      this.toastr.success("Congratulation Your Guess is right")
    }
      else
      {
        this.toastr.error("Oops Please try again")
      }
    }
  }
 generateNumber(){
  this. generted_Number = Math.floor((Math.random() * 100) + 1);
  console.log(this.generted_Number);
  this.isNumberGenerated = true; 
 }
}