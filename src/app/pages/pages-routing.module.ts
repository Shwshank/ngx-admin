import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { Home1Component } from './home1/home1.component';
import { ProjectsComponent } from './projects/projects.component';
import { JsComponent } from './js/js.component';
import { SkillComponent } from './skill/skill.component';
import { CompaniesComponent } from './companies/companies.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: ECommerceComponent,
  }, {
    path: 'iot-dashboard',
    component: DashboardComponent,
  }, {
    path: 'home',
    component: HomeComponent,
  },{
    path: 'home1',
    component: Home1Component,
  },{
    path: 'projects',
    component: ProjectsComponent,
  },{
    path: 'skill',
    component: SkillComponent,
  },{
    path: 'js',
    component: JsComponent,
  },{
    path: 'orgs',
    component: CompaniesComponent,
  },{
    path: 'ui-features',
    loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
  },

  {
    path: '**',
    component: Home1Component,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
