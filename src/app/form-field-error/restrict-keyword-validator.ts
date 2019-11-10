import { Directive, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
    selector: '[restrictKeywordValidator][ngModel],[restrictKeywordValidator][formControl],[restrictKeywordValidator][formControlName]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => RestrictKeywordValidatorDirective), multi: true }
    ]
})
export class RestrictKeywordValidatorDirective implements Validator {
    @Input('restrictKeywordValidator') restrictedKeyword: string;
    validate(ctrl: AbstractControl): { [key: string]: boolean } | null {
        return ctrl.value === this.restrictedKeyword ? { 'invalidValue': true } : null;
    }
}