import { Component, Input } from '@angular/core';
import { IQuestion } from './iquestion.metadata';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  @Input() data!: IQuestion;
  
}
