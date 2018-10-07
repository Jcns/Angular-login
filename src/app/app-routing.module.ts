import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'login', loadChildren: './login-form/login-form.module#LoginFormModule' },
    { path: 'register', loadChildren: './register-form/register-form.module#RegisterFormModule' },
    {
        path: '',
        loadChildren: './home/home.module#HomeModule'
    },
    { path: '**', redirectTo: '' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}