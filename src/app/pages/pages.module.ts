import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';

import { HomeModule } from './home/home.module';
import { Home1Module } from './home1/home1.module';
import { ProjectsModule } from './projects/projects.module';
import { JsModule } from './js/js.module';
import { SkillModule } from './skill/skill.module';
import { CompaniesModule } from './companies/companies.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    HomeModule,
    Home1Module,
    ProjectsModule,
    JsModule,
    SkillModule,
    CompaniesModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
