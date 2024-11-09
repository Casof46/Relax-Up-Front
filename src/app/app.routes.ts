import { Routes } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioRegistrarComponent } from './components/usuario/usuario-registrar/usuario-registrar.component';

export const routes: Routes = [
    {
        path: 'usuarios', component:UsuarioComponent,
        children:[
            {path: 'nuevo',component:UsuarioRegistrarComponent},
            {path:'ediciones/:id',component:UsuarioRegistrarComponent}
        ]
    }
];
