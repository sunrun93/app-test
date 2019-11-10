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
@NgModule({
  declarations: [
    AppComponent,
    ZoneDemoComponent,
    FormDemoComponent,
    MaskInputPipe,
    InputMaskDirective,
    PhoneNumberComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [MaskInputPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
