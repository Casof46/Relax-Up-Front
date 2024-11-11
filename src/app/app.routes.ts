import { Routes } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { RolComponent } from './components/rol/rol.component';
import { RolRegistrarComponent } from './components/rol/rol-registrar/rol-registrar.component';
import { UsuarioRegistrarComponent } from './components/usuario/usuario-registrar/usuario-registrar.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EventosRegistrarComponent } from './components/eventos/eventos-registrar/eventos-registrar.component';
import { UsuariorutinaComponent } from './components/usuariorutina/usuariorutina.component';
import { UsuariorutinaRegistrarComponent } from './components/usuariorutina/usuariorutina-registrar/usuariorutina-registrar.component';
import { LoginComponent } from './components/login/login.component';
import { seguridadGuard } from './guard/seguridad.guard';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    {
        path: 'usuarios', component:UsuarioComponent,
        children:[
            {path: 'nuevo',component:UsuarioRegistrarComponent}
        ],
        canActivate: [seguridadGuard],
    },
    {
        path: 'rol', component:RolComponent,
        children:[
            {path: 'nuevo',component:RolRegistrarComponent},
            {path: 'ediciones/:id',component:RolRegistrarComponent}
        ],
        canActivate: [seguridadGuard],
    },
    {
        path: 'eventos', component:EventosComponent,
        children:[
            {path: 'nuevo',component:EventosRegistrarComponent},
        ],
        canActivate: [seguridadGuard],
    },
    {
        path: 'UsuarioRutina', component:UsuariorutinaComponent,
        children:[
            {path: 'nuevo',component:UsuariorutinaRegistrarComponent},
        ],
        canActivate: [seguridadGuard],
    },
    {
      path: 'homes',
      component: HomeComponent,
      canActivate: [seguridadGuard],  
    },
];
