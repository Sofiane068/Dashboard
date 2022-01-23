import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
  public email!: string;
  public pass!: string;
  public connexionRatee=false
  constructor(private monServiceAuth: AuthServiceService,private router:Router ) {}

  ngOnInit(): void {}

  validerForm(){
    this.monServiceAuth.checkAuth(this.email,this.pass).then(connexionValide =>{
      if(connexionValide){
        this.router.navigate(["Dashboard"]);
      }else{
        this.connexionRatee= true
      }
       
    });
   
  }
}
