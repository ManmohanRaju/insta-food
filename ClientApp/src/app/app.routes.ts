import { LoginComponent } from './login/login.component';
import { RestaurentsComponent } from './restaurents/restaurents.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'resturents', component: RestaurentsComponent}
];
