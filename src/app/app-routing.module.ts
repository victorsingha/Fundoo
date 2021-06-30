import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './pages/resetpassword/resetpassword.component';

const routes: Routes = [{ path: '', component: RegisterComponent },
{ path: 'login', component: LoginComponent, },
{ path: 'forgotpassword', component: ForgotpasswordComponent  },
{ path: 'resetpassword',component: ResetpasswordComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
