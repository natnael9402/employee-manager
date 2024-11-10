import { Component, inject, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

loginObj = {
  username : '',
  password : ''
}

router = inject(Router)

onLogin() {
  if (this.loginObj.username === 'natty' && this.loginObj.password === '123') {
    this.router.navigateByUrl('/dashboard')
  }
}

}
