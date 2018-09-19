import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducationSectionComponent } from './education-section/education-section.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { WorkingExperiencesComponent } from './working-experiences/working-experiences.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { MainPageComponent } from './main-page/main-page.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectComponent } from './project/project.component';
import { ViewResumeComponent } from './view-resume/view-resume.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationSectionComponent,
    ContactFormComponent,
    WorkingExperiencesComponent,
    FooterSectionComponent,
    MainPageComponent,
    IntroductionComponent,
    AboutMeComponent,
    ProjectComponent,
    ViewResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
