import { FuncionarioService } from './../../services/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Funcionario } from '../../models/Funcionarios';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  providers:[FuncionarioService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
search($event: Event) {
throw new Error('Method not implemented.');
}

  funcionarios: Funcionario[] = [];

  // busca de funcionários
  funcionariosGeral: Funcionario[] = [];

  constructor( private FuncionarioService: FuncionarioService ) {}

  ngOnInit(): void {

    this.FuncionarioService.GetFuncionarios().subscribe(data => {
      const dados = data.dados;

        dados.map((item) => {
          console.log(this.funcionarios)
        })

    });

  }

}
