import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioFormComponent } from "../../componentes/funcionario-form/funcionario-form.component";

@Component({
    selector: 'app-cadastro',
    standalone: true,
    templateUrl: './cadastro.component.html',
    styleUrl: './cadastro.component.css',
    imports: [CommonModule, FuncionarioFormComponent]
})

export class CadastroComponent {
    createFuncionario() {
        
    }
}
