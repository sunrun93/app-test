import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MaskInputPipe } from '../mask-input.pipe';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent implements OnInit {

  constructor(private maskInputPipe: MaskInputPipe) { }
  form:FormGroup;
  nameModel: string;

  ngOnInit() {
    this.form = new FormGroup({
      ssn: new FormControl({
        value: 'ssn',
        label: 'SSN'
      }),
      name: new FormControl('wang')
    });

    this.form.valueChanges.subscribe(val => {
      if (typeof val.name === 'string') {
        const maskedVal = this.maskInputPipe.transform(val.name);
        if (val.name !== maskedVal) {
          this.form.patchValue({name: maskedVal},{ emitEvent: false });
        }
      }
    });
  }

  valueChanged(event){
    event;
    this.form.get('name').patchValue(event + '***');
  }
  
}
