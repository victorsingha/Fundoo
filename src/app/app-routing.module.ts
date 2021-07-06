import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './pages/resetpassword/resetpassword.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotesComponent } from './components/notes/notes.component';
import { TrashComponent } from './components/trash/trash.component';

const routes: Routes = [
{ path: '', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'login', component: LoginComponent },
{ path: 'dashboard', component: DashboardComponent,
  children:[
    {path:'notes',component: NotesComponent},
    {path:'trash',component:TrashComponent}
  ] 
},
{ path: 'forgotpassword', component: ForgotpasswordComponent  },
{ path: 'resetpassword',component: ResetpasswordComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
