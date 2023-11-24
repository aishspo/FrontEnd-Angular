import { Routes } from '@angular/router';
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HomeComponent } from './pages/home/home.component';
// import { HttpClientModule } from '@angular/common/http';
// import { CadastroComponent } from './pages/cadastro/cadastro.component';
// import { DetalhesComponent } from './pages/detalhes/detalhes.component';
// import { EditarComponent } from './pages/editar/editar.component';
// import { FuncionarioFormComponent } from './componentes/funcionario-form/funcionario-form.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     HomeComponent,
//     CadastroComponent,
//     DetalhesComponent,
//     EditarComponent,
//     FuncionarioFormComponent
//   ],

//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     HttpClientModule,

//   ],

//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FuncionarioFormComponent } from './componentes/funcionario-form/funcionario-form.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { routing } from '@angular/router'

// Angular Material

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';

import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { EditarComponent } from './pages/editar/editar.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { MatLabel } from '@angular/material/form-field';

@NgModule ({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    HomeComponent,
    AppComponent,
    CadastroComponent,
    EditarComponent,
    DetalhesComponent,
    FuncionarioFormComponent

  ],

  declarations: [ ],
  bootstrap:    [ ],

})

export class AppModule { }
