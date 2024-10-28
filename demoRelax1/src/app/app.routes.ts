import { Routes } from '@angular/router';
import { RolComponent } from './components/rol/rol.component';
import { InsertarComponent } from './components/rol/insertar/insertar.component';

export const routes: Routes = [
    {
      path: 'roles', component: RolComponent,
      children: [
          { path: 'nuevo', component: InsertarComponent 

          },
          {
            path:'ediciones/:id',component:InsertarComponent
          }
      ],
    },
  ];