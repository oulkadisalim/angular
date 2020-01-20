import { EmployeeDetailsComponent } from './etud-details/etud-details.component';
import { CreateEmployeeComponent } from './etud-etudiant/etud-etudiant.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './etud-list/etud-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'etudiant', pathMatch: 'full' },
  { path: 'etudiant', component: EmployeeListComponent },
  { path: 'add', component: CreateEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
