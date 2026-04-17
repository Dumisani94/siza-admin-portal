import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component/login.component';
import { Home } from './home/home';
import { Providers } from './providers/providers';

export const routes: Routes = [{
    path: '', component: LoginComponent,
}, {
    path: 'home', component: Home,
}, {
    path: 'providers', component: Providers,
}
];
