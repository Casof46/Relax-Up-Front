import { Routes } from '@angular/router';
import { RelaxupComponent } from './components/relaxup/relaxup.component';
import path from 'path';
import { Component } from '@angular/core';
import { InsertarComponent } from './components/relaxup/insertar/insertar.component';

export const routes: Routes = [
    {
        path: 'relaxup', component:RelaxupComponent,
        children: [
            { path: 'nuevo',component: InsertarComponent},
            { path: 'ediciones/:id',component:InsertarComponent},
            { path: 'rol',component:RelaxupComponent}
        ],
    },
];
