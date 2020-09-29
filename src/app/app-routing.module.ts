import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IssueComponent } from './pages/issue/issue.component';
import { ProjectComponent } from './pages/project/project.component';
import { AppLayoutComponent } from './_layout';

const routes: Routes = [
  {
    path: '', component: AppLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'issue', component: IssueComponent },
      { path: 'project', component: ProjectComponent },
      { path: 'dashboard', component: DashboardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
