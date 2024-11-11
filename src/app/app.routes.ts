import { Routes } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { RolComponent } from './components/rol/rol.component';
import { RolRegistrarComponent } from './components/rol/rol-registrar/rol-registrar.component';
import { UsuarioRegistrarComponent } from './components/usuario/usuario-registrar/usuario-registrar.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EventosRegistrarComponent } from './components/eventos/eventos-registrar/eventos-registrar.component';
import { UsuariorutinaComponent } from './components/usuariorutina/usuariorutina.component';
import { UsuariorutinaRegistrarComponent } from './components/usuariorutina/usuariorutina-registrar/usuariorutina-registrar.component';

export const routes: Routes = [
    {
        path: 'usuarios', component:UsuarioComponent,
        children:[
            {path: 'nuevo',component:UsuarioRegistrarComponent},
            {path: 'ediciones/:id',component:UsuarioRegistrarComponent}
        ]
    },
    {
        path: 'rol', component:RolComponent,
        children:[
            {path: 'nuevo',component:RolRegistrarComponent},
            {path: 'ediciones/:id',component:RolRegistrarComponent}
        ]
    },
    {
        path: 'eventos', component:EventosComponent,
        children:[
            {path: 'nuevo',component:EventosRegistrarComponent},
            {path: 'ediciones/:id',component:EventosRegistrarComponent}
        ]
    },
    {
        path: 'UsuarioRutina', component:UsuariorutinaComponent,
        children:[
            {path: 'nuevo',component:UsuariorutinaRegistrarComponent},
        ]
    }
];
