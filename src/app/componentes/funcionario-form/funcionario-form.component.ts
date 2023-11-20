import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Funcionario } from '../../models/Funcionarios';

@Component({
  selector: 'app-funcionario-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './funcionario-form.component.html',
  styleUrl: './funcionario-form.component.css'
})

export class FuncionarioFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Funcionario>();

  funcionarioForm!: FormGroup

  constructor() {
    
  }

  ngOnInit(): void {
    this.funcionarioForm = new FormGroup({
      id: new FormControl(0),
      nome: new FormControl(''),
      sobrenome: new FormControl(''),
      departamento: new FormControl(''),
      turno: new FormControl(''),
      ativo: new FormControl(true),
      dataDeCriacao: new FormControl(new Date()),
      dataDeAlteracao: new FormControl(new Date())

    });
  }

  submit() {
    this.onSubmit.emit(this.funcionarioForm.value)
}

}


