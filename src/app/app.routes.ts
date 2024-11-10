import { Routes } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioRegistrarComponent } from './components/usuario/usuario-registrar/usuario-registrar.component';
import { RolComponent } from './components/rol/rol.component';
import { RolRegistrarComponent } from './components/rol/rol-registrar/rol-registrar.component';

export const routes: Routes = [
    {
        path: 'usuarios', component:UsuarioComponent,
        children:[
            {path: 'nuevo',component:UsuarioRegistrarComponent},
            {path:'ediciones/:id',component:UsuarioRegistrarComponent}
        ]
    },
    {
        path: 'rol', component:RolComponent,
        children:[
            {path: 'nuevo',component:RolRegistrarComponent},
            {path:'ediciones/:id',component:RolRegistrarComponent}
        ]
    }
];
