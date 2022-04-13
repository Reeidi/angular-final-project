import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
    selector: 'app-contacts-page',
    templateUrl: './contacts-page.component.html',
    styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent {

    @ViewChild('f') form!: NgForm;

    constructor(private contactService: ContactService, private router: Router) { }

    submitHandler() {
        let data = this.form.value;
        this.contactService.send$(data).subscribe(response => {
            if (response.success) {
                this.router.navigate(['/']);
            }
        });

    }
}
