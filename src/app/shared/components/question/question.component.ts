import { Component} from '@angular/core';
import { IQuestion } from '../../interfaces/iquestion.metadata';
import { PreguntasService } from '@data/services/api/preguntaService/preguntas.service';

@Component({
  standalone: true,
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
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
