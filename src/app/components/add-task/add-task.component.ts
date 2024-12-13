import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarefa } from '../../../Tarefa';
import { ButtonComponent } from '../button/button.component';
import { CommonModule, NgIf } from '@angular/common';
@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule,ButtonComponent, CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
   
})
export class AddTaskComponent {

  @Output() onAddTask = new EventEmitter<Tarefa>();

  tarefa: string = '';
  categoria: string = '';
  concluido: boolean = false;
  mostarAddTarefa: boolean = false;


  AlteraVisualizacao(valor: boolean) {
    this.mostarAddTarefa = valor;
  }

  onSubmit() {
    if (!this.tarefa) {
      alert('Por favor adicione uma tarefa!');
      return;
    }

    const novaTarefa = {
      tarefa: this.tarefa,
      categoria: this.categoria,
      concluido: this.concluido
    };

    this.onAddTask.emit(novaTarefa);

    this.tarefa = '';
    this.categoria = '';
    this.concluido = false;
  }
}
