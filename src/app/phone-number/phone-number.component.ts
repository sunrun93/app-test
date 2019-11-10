import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-number',
    templateUrl: './phone-number.component.html'
})
export class PhoneNumberComponent implements OnInit {
    phoneNumberUI: string;
    phoneNumber: string;
    maskedSection: any;
    visibleSection: any;
    maskedSectionOriginal: string = "";
    previouslength: number = 0;
    @ViewChild('phoneNumberText') private phoneNumberValue: ElementRef;
    form: FormGroup;
    constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      phone: new FormControl('12345')
    })
    this.maskData(this.form.get('phone').value);
  }
    newmethod(event) {
        if (event.code == "Backspace" || event.code == "Delete") {
            this.clearData();
        }
        else {
          var temp=JSON.parse(JSON.stringify(this.phoneNumberValue.nativeElement.value));
          temp=  temp.replace(/\*/g, '');
          console.log(temp);
          console.log(this.phoneNumberValue.nativeElement.value);
          if(temp)
            this.maskData(this.phoneNumberValue.nativeElement.value);
        }
    }
    maskData(event) {
        if (event.length > 4) {
            let visibleDigitstemp = 4 - event.length;
            let maskedSectiontemp = event.slice(0, -visibleDigitstemp);

            if (maskedSectiontemp)
                maskedSectiontemp = maskedSectiontemp.replace(/\*/g, '');

            if (maskedSectiontemp.length > 0) {
                this.maskedSectionOriginal = this.maskedSectionOriginal + JSON.parse(JSON.stringify(maskedSectiontemp));
            }
        }

        const visibleDigits = 4;
        this.maskedSection = event.slice(0, -visibleDigits);

        this.visibleSection = event.slice(-visibleDigits);
        this.phoneNumberUI = this.maskedSection.replace(/./g, '*') + this.visibleSection;

        this.phoneNumber = this.maskedSectionOriginal + this.visibleSection;
    }
    clearData() {
        this.maskedSection = "";
        this.visibleSection = "";
        this.phoneNumberUI = "";
        this.phoneNumber = "";
        this.maskedSectionOriginal="";
    }

    show(){
      if (this.phoneNumberUI === this.phoneNumber) {
        this.maskedSectionOriginal = '';
        this.maskData(this.phoneNumberValue.nativeElement.value);
      } else {
        this.phoneNumberUI = this.phoneNumber;
      }
      
    }
}