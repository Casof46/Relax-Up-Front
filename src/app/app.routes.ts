import { Routes } from '@angular/router';
import path from 'path';
import { Component } from '@angular/core';
import { PlanesmembresiaComponent } from './components/planesmembresia/planesmembresia.component';
import { PlanesmembresiaRegistrarComponent } from './components/planesmembresia/planesmembresia-registrar/planesmembresia-registrar.component';
import { SuscripcionComponent } from './components/suscripcion/suscripcion.component';
import { SuscripcionRegistrarComponent } from './components/suscripcion/suscripcion-registrar/suscripcion-registrar.component';
import { MetodopagoComponent } from './components/metodopago/metodopago.component';
import { MetodopagoRegistrarComponent } from './components/metodopago/metodopago-registrar/metodopago-registrar.component';
import { RolComponent } from './components/rol/rol.component';
import { RolRegistrarComponent } from './components/rol/rol-registrar/rol-registrar.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioRegistrarComponent } from './components/usuario/usuario-registrar/usuario-registrar.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { ReporteTotalSuscripcionesComponent } from './components/reporte/reporte-total-suscripciones/reporte-total-suscripciones.component';

export const routes: Routes = [
    {
        path: 'planes', component:PlanesmembresiaComponent,
        children:[
            {path: 'nuevo',component:PlanesmembresiaRegistrarComponent},
            {path:'ediciones/:id',component:PlanesmembresiaRegistrarComponent}
        ]
    },
    {
        path: 'suscripciones', component:SuscripcionComponent,
        children:[
            {path: 'nuevo',component:SuscripcionRegistrarComponent},
            {path:'ediciones/:id',component:SuscripcionRegistrarComponent}
        ]
    },
    {
        path: 'metodos', component:MetodopagoComponent,
        children:[
            {path: 'nuevo',component:MetodopagoRegistrarComponent},
            {path:'ediciones/:id',component:MetodopagoRegistrarComponent}
        ]
    },
    {
        path: 'rol', component:RolComponent,
        children:[
            {path: 'nuevo',component:RolRegistrarComponent},
            {path:'ediciones/:id',component:RolRegistrarComponent}
        ]
    },
    {
        path: 'usuarios', component:UsuarioComponent,
        children:[
            {path: 'nuevo',component:UsuarioRegistrarComponent},
            {path:'ediciones/:id',component:UsuarioRegistrarComponent}
        ]
    },
    {
        path: 'reportes', component:ReporteComponent,
        children:[
            {path: 'suscripciones',component:ReporteTotalSuscripcionesComponent},
        ]
    },
];