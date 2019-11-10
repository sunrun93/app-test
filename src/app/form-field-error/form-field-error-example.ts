import { Component, ViewChild } from '@angular/core';
import { FormControl, Validators, NgModel, FormGroup, FormBuilder } from '@angular/forms';

import { RestrictKeywordValidatorDirective } from './restrict-keyword-validator';

/** @title Form field with error messages */
@Component({
  selector: 'form-field-error-example',
  templateUrl: 'form-field-error-example.html',
  styleUrls: ['form-field-error-example.css']
})
export class FormFieldErrorExample {
  myForm: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.myForm = this.fb.group({
      ssn: [''],
    })
  }
  ssnValue: string;
  onBlurSSN(value: string) {
    this.ssnValue = this.myForm.get('ssn').value;
    this.myForm.get('ssn').setValue(this.secureSSNFormat(value));

  }
  secureSSNFormat(inputVal) {
    var retVal = inputVal;
    if (inputVal == "") return retVal = "";
    // if (topFrame.cnfParam("3413") == "MFF") {
    if (inputVal.length == 9)
      retVal = "XXX-XX-" + inputVal.substr(5, 4);
    else
      alert('enter valid ssn');
    // }
    return retVal;
  }
  ValidSSNOnMasking(CorrectSSN, ValueIn) {
    var OriginalValue = CorrectSSN;
    // ValueIn = ValueIn.replace(/-/g, "");
    // ValueIn = ValueIn.replace(/ /g, "");
    // OriginalValue = OriginalValue.replace(/-/g, "");
    // OriginalValue = OriginalValue.replace(/ /g, "");
    // if (OriginalValue != ValueIn) {
    //   var bCheckSSN = (ValueIn.substr(0, 5) == "XXXXX") ? true : false;
    //   if (bCheckSSN) {
    //     alert("Please enter the complete SSN.");
    //     this.myForm.get('ssn').setValue("XXX-XX-" + OriginalValue.substr(5));
    //     // atlFocus(eval(ctlName));
    //     return OriginalValue.substr(0, 3) + "-" + OriginalValue.substr(3, 2) + "-" + OriginalValue.substr(5);
    //   }
    //   else {
    //     if (ValueIn.length == 9) {
    //       CorrectSSN = "XXX-XX-" + ValueIn.substr(5);
    //     }
    //   }
    // }
    return ValueIn.substr(0, 3) + "-" + ValueIn.substr(3, 2) + "-" + ValueIn.substr(5);
  }
}