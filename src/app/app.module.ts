import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ParticlesModule } from 'angular-particle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateGeneratorFormComponent } from './template-generator-form/template-generator-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateGeneratorFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
