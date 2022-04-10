import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
    selector: '[appUrlValidation]',
    providers: [{ provide: NG_VALIDATORS, useExisting: UrlValidationDirective, multi: true }]
})
export class UrlValidationDirective implements Validator {

    constructor() { }

    validate(control: AbstractControl): ValidationErrors | null {
        var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
        return regexp.test(control.value) ? null : { url: true };
    };
}
