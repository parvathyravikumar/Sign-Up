import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../core/register/register.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private registerService: RegisterService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      password: ['', [Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9@$!%*?&]{8,}$')]]
    },{
        validator: this.PasswordValidator
        
    })
  }
  
  /*Password should not contain username validation*/
  PasswordValidator(g: FormGroup) {
    if(g.value != ""){
      var fname: string  = g.get('firstName').value;
      var lname: string  = g.get('lastName').value;
      var pass: string  = g.get('password').value;

      if(pass !="" && (pass.includes(fname) || pass.includes(lname))){
        alert("Password should not contain first name or last name");
        return{'mismatch': true};      
      }
      return null;
    }
  }

  // Getter for form fields
  get formTags() {
    return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.registerForm.invalid) {
        return;
      }else{
        var firstName:string = this.registerForm.value.firstName;
        var lastName:string = this.registerForm.value.lastName;
        var email:string = this.registerForm.value.email;
        this.registerService.register(firstName,lastName,email);
      }  
  }
}
