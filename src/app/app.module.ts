import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FuncionarioFormComponent } from './componentes/funcionario-form/funcionario-form.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routes';

@NgModule ({
  imports: [ 
    BrowserModule, 
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    routing ],

  declarations: [  ],
  bootstrap:    [ ]
  
})

export class AppModule { }
