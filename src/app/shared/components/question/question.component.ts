import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { PreguntasService } from '@data/services/api/preguntaService/preguntas.service';
import { IQuestion } from '@shared/interfaces/iquestion.metadata';

@Component({
  standalone: true,
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  imports: [CommonModule]
})
export class QuestionComponent {
  public dataPreguntas: IQuestion[] | null = null;

  constructor ( private preguntaService: PreguntasService ) {
    this.preguntaService.getAllPreguntas().subscribe( r => {
      if(!r.error) {
        this.dataPreguntas = r.data;
        console.log(r.data);
      } else {
        console.error('Error al obtener el listado:', r.error);
      }
    });
  }
  
}
