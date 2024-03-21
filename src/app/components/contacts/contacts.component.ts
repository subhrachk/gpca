import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  email_id : string =  'contactgpca@gmail.com';
  loading : boolean = false;
  error : boolean = false;
  messagesent : boolean = false;
  errormessage : string = "";

  FormData !: FormGroup ;

  constructor(private builder: FormBuilder) {
    this.setFormDataBlank();
  }
  setFormDataBlank()
        { 
          this.FormData = this.builder.group({
            name : new FormControl('', [Validators.required]),
            email : new FormControl('', [Validators.required]),
            subject: new FormControl('New Query', [Validators.required]),
            message : new FormControl('', [Validators.required]),
            }) 
          }
  onSubmit() {
    this.loading = true;
    const templateParams = {
        from_name: this.FormData.value.name,
        to_name: "Admin",
        from_email: this.FormData.value.email,
        subject: this.FormData.value.subject,
        message: this.FormData.value.message,
        reply_to: "subhra_chk@yahoo.co.uk"
    };
    
    emailjs
      .send("service_jn53vwh","template_a08106r", templateParams, {
        publicKey: 'K6XHSgUk95wt8yXI4',
      })
      .then(
        (response) => {
          this.setFormDataBlank();
          console.log('SUCCESS!', response.status, response.text);
          this.loading = false;
          this.messagesent = true;
        },
        (err) => {          
          this.loading = false;
          this.messagesent = true;
          this.errormessage = err.message.toString();
          console.log('FAILED...', err);
        },
      );
  }
  }