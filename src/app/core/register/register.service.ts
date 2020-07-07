import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  public register(fName: string,lName: string,email: string):void{
    var data = {
      "firstName" :fName,
      "lastName" :lName,
      "email" :email
    };
   this.http.post("https://demo-api.now.sh/users",data)
    .subscribe(
      (val) => {
          console.log("POST call successful",val);
      },
      response => {
          console.log("POST call in error", response);
      },
      () => {
          console.log("The POST observable is now completed.");
          alert("Account created successfully");
      });
  }
}
