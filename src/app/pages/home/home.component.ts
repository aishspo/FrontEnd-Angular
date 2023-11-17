import { FuncionarioService } from './../../services/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Funcionario } from '../../models/Funcionarios';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers:[FuncionarioService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  funcionarios: Funcionario[] = [];

  // busca de funcionários
  funcionariosGeral: Funcionario[] = [];

  constructor( private FuncionarioService: FuncionarioService ) {}

  ngOnInit(): void {
    this.FuncionarioService.GetFuncionarios().subscribe(data => {
      const dados = data.dados;
      dados.map
      console.log(data);

    });
  }

}
