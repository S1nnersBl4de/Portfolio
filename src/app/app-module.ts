import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Layout } from './layout/layout';
import { Homepage } from './components/homepage/homepage';
import { Hero } from './components/hero/hero';
import { Aboutme } from './components/aboutme/aboutme';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Experience } from './components/experience/experience';
import { Contacts } from './components/contacts/contacts';
import { Notfound } from './components/notfound/notfound';

@NgModule({
  declarations: [
    App,
    Layout,
    Homepage,
    Hero,
    Aboutme,
    Skills,
    Projects,
    Experience,
    Contacts,
    Notfound
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
