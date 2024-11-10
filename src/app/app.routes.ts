import { Routes } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { RolComponent } from './components/rol/rol.component';
import { RolRegistrarComponent } from './components/rol/rol-registrar/rol-registrar.component';

export const routes: Routes = [
    {
        path: 'usuarios', component:UsuarioComponent,
        children:[

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
