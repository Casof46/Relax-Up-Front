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
import { ImagenesgatosComponent } from './components/imagenesgatos/imagenesgatos.component';
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
import { PlanesmembresiaComponent } from './components/planesmembresia/planesmembresia.component';
import { PlanesmembresiaRegistrarComponent } from './components/planesmembresia/planesmembresia-registrar/planesmembresia-registrar.component';
import { SuscripcionComponent } from './components/suscripcion/suscripcion.component';
import { SuscripcionRegistrarComponent } from './components/suscripcion/suscripcion-registrar/suscripcion-registrar.component';
import { MetodopagoComponent } from './components/metodopago/metodopago.component';
import { MetodopagoRegistrarComponent } from './components/metodopago/metodopago-registrar/metodopago-registrar.component';
import { EmergenciaComponent } from './components/emergencia/emergencia.component';
import { EmergenciaRegistrarComponent } from './components/emergencia/emergencia-registrar/emergencia-registrar.component';
import { ReporteConfirmaronComponent } from './components/reporte/reporte-confirmaron/reporte-confirmaron.component';

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
    {
        path:'gatos',
        component: ImagenesgatosComponent,
        canActivate: [seguridadGuard],  
    },
    {
        path: 'foross', component:ForoComponent,
        children:[
            {path: 'nuevo',component:ForoRegistrarComponent},
            {path: 'ediciones/:id',component:ForoRegistrarComponent},

        ],
        canActivate: [seguridadGuard],
    },
    {
        path: 'mensajeforos', component:MensajeforoComponent,
        children:[
            {path: 'nuevo',component:MensajeforoRegistrarComponent},
            {path: 'ediciones/:id',component:MensajeforoRegistrarComponent},

        ],
        canActivate: [seguridadGuard],
    }
    ,
    {
        path: 'rutina', component:RutinaComponent,
        children:[
            {path: 'nuevo',component:RutinaRegistrarComponent},
            {path: 'ediciones/:id',component:RutinaRegistrarComponent},

        ],
        canActivate: [seguridadGuard],
    }
    ,
    {
        path: 'ejerciciorutinas', component:EjerciciorutinaComponent,
        children:[
            {path: 'nuevo',component:EjerciciorutinaRegistrarComponent},
            {path: 'ediciones/:id',component:EjerciciorutinaComponent},

        ],
        canActivate: [seguridadGuard],
    }
    ,
    {
        path: 'tecnicasrelajacion', component:TecnicarelajacionComponent,
        children:[
            {path: 'nuevo',component:TecnicarelajacionRegistrarComponent},
            {path: 'ediciones/:id',component:TecnicarelajacionRegistrarComponent},

        ],
        canActivate: [seguridadGuard],
    }
    ,
    {
        path: 'emergencias', component:EmergenciaComponent,
        children:[
            {path: 'nuevo',component:EmergenciaRegistrarComponent},
            {path: 'ediciones/:id',component:EmergenciaRegistrarComponent},

        ],
        canActivate: [seguridadGuard],
    }
    ,
    {
        path: 'tecnicasrelajacion', component:TecnicarelajacionComponent,
        children:[
            {path: 'nuevo',component:TecnicarelajacionRegistrarComponent},
            {path: 'ediciones/:id',component:TecnicarelajacionRegistrarComponent},

        ],
        canActivate: [seguridadGuard],
    }
    ,
    {
        path: 'emergencias', component:EmergenciaComponent,
        children:[
            {path: 'nuevo',component:EmergenciaRegistrarComponent},
            {path: 'ediciones/:id',component:EmergenciaRegistrarComponent},

        ],
        canActivate: [seguridadGuard],
    },
    {
        path: 'planes', component:PlanesmembresiaComponent,
        children:[
            {path: 'nuevo',component:PlanesmembresiaRegistrarComponent},
            {path:'ediciones/:id',component:PlanesmembresiaComponent}
        ],
        canActivate: [seguridadGuard],
    },
    {
        path: 'suscripciones', component:SuscripcionComponent,
        children:[
            {path: 'nuevo',component:SuscripcionRegistrarComponent},
            {path:'ediciones/:id',component:SuscripcionRegistrarComponent}
        ],
        canActivate: [seguridadGuard],
    },
    {
        path: 'metodos', component:MetodopagoComponent,
        children:[
            {path: 'nuevo',component:MetodopagoRegistrarComponent},
            {path:'ediciones/:id',component:MetodopagoRegistrarComponent}
        ],
        canActivate: [seguridadGuard],
    },
    {
    path: 'reporte-confirmaron', component:ReporteConfirmaronComponent,
    canActivate: [seguridadGuard],
    }
];
