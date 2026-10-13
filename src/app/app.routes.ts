import { Routes } from '@angular/router';
import { Home} from './home/home';
import { Login} from './login/login'
import { SignIn } from './sign-in/sign-in';

export const routes: Routes = [
    {path:'', redirectTo: '/home', pathMatch: 'full' },
    {path:'home', component:Home, title:'Home'},
    {path:'login', component:Login, title:'login'},
    {path:'sign-in', component:SignIn, title:'SignIn'}
];