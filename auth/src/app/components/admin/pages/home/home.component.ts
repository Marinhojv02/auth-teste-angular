import { AuthService } from 'src/app/core/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private authservice:AuthService){

  }

  public logout(){
    this.authservice.logout();
  }
}
