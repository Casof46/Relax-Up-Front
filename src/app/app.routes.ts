import { Routes } from '@angular/router';
import { PlanesComponent } from './components/planes/planes.component';
import path from 'path';
import { Component } from '@angular/core';
import { InsertarComponent } from './components/planes/insertar/insertar.component';

export const routes: Routes = [
  {
    path: 'planes',
    component: PlanesComponent,
    children: [
      { 
        path: 'nuevo', component: InsertarComponent 
      },
      {
        path:'ediciones/:id',component:InsertarComponent
      }
    ],
  },
];
