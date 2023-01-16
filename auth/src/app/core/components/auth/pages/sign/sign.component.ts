import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent {
  public formAuth: FormGroup = this.formbuilder.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required]]
  })

  public errorMsg: string = '';

  constructor(
    private formbuilder : FormBuilder,
    private authService:AuthService,
    ){

  }


  public submitForm():void{
      if(this.formAuth.valid){
        this.authService
        .sign({
          email: this.formAuth.value.email,
          senha: this.formAuth.value.senha
        })
        .subscribe({
          next: (res) => res,
          error: (e) => this.errorMsg = e
        })
      }
  }

}
