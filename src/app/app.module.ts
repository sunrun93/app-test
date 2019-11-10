import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ZoneDemoComponent } from './zone-demo/zone-demo.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaskInputPipe } from './mask-input.pipe';
import { InputMaskDirective } from './input-mask.directive';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { FormsModule } from '@angular/forms';
import { SSNPipe } from './form-field-error/ssn-pipe';
import { FormFieldErrorExample } from './form-field-error/form-field-error-example';
@NgModule({
  declarations: [
    AppComponent,
    ZoneDemoComponent,
    FormDemoComponent,
    MaskInputPipe,
    InputMaskDirective,
    PhoneNumberComponent,
    FormFieldErrorExample,
    SSNPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [MaskInputPipe, SSNPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
