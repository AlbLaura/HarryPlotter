import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
/* import { PreguntasService } from '@data/services/api/preguntaService/preguntas.service';
import { IQuestion } from '@shared/components/question/iquestion.metadata'; */

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  /* public preguntas!: IQuestion[]; */

  /* TODO: error con el servicio de preguntas, investigar bien */

  constructor (
    private viewportScroller: ViewportScroller,
    /* private preguntaService: PreguntasService */
    ) {
      /* this.preguntaService.getAllPreguntas().subscribe( r => {
        if(!r) {
          this.preguntas = r.data;
        }
      }); */
    }

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0,0]);
  }

}