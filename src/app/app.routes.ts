import { Routes } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { RolComponent } from './components/rol/rol.component';
import { RolRegistrarComponent } from './components/rol/rol-registrar/rol-registrar.component';
import { UsuarioRegistrarComponent } from './components/usuario/usuario-registrar/usuario-registrar.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EventosRegistrarComponent } from './components/eventos/eventos-registrar/eventos-registrar.component';
import { ForoComponent } from './components/foro/foro.component';
import { ForoRegistrarComponent } from './components/foro/foro-registrar/foro-registrar.component';
import { MensajeforoComponent } from './components/mensajeforo/mensajeforo.component';
import { MensajeforoRegistrarComponent } from './components/mensajeforo/mensajeforo-registrar/mensajeforo-registrar.component';
import { TecnicarelajacionRegistrarComponent } from './components/tecnicarelajacion/tecnicarelajacion-registrar/tecnicarelajacion-registrar.component';
import { TecnicarelajacionComponent } from './components/tecnicarelajacion/tecnicarelajacion.component';
import { RutinaComponent } from './components/rutina/rutina.component';
import { RutinaRegistrarComponent } from './components/rutina/rutina-registrar/rutina-registrar.component';
import { EjerciciorutinaComponent } from './components/ejerciciorutina/ejerciciorutina.component';
import { EjerciciorutinaRegistrarComponent } from './components/ejerciciorutina/ejerciciorutina-registrar/ejerciciorutina-registrar.component';

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
        path: 'foros', component:ForoComponent,
        children:[
            {path: 'nuevo',component:ForoRegistrarComponent},
            {path: 'ediciones/:id',component:ForoRegistrarComponent }
        ]
    }
    ,
    {
        path: 'mensajesforos', component:MensajeforoComponent,
        children:[
            {path: 'nuevo',component:MensajeforoRegistrarComponent},
            {path: 'ediciones/:id',component:MensajeforoRegistrarComponent }
        ]
    },
    {
        path: 'tecnicasrelajacion', component:TecnicarelajacionComponent,
        children:[
            {path: 'nuevo',component:TecnicarelajacionRegistrarComponent},
            {path: 'ediciones/:id',component:TecnicarelajacionRegistrarComponent }
        ]
    },
    {
        path: 'rutina', component:RutinaComponent,
        children:[
            {path: 'nuevo',component:RutinaRegistrarComponent},
            {path: 'ediciones/:id',component:RutinaRegistrarComponent }
        ]
    },
    {
        path: 'ejerciciorutina', component:EjerciciorutinaComponent,
        children:[
            {path: 'nuevo',component:EjerciciorutinaRegistrarComponent},
            {path: 'ediciones/:id',component:EjerciciorutinaRegistrarComponent }
        ]
    }
];
