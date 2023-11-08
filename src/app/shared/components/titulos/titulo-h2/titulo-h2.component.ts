import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo-h2',
  templateUrl: './titulo-h2.component.html',
  styleUrls: ['./titulo-h2.component.css']
})
export class TituloH2Component implements OnInit {
  @Input() texto = '';
  @Input() type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'dark' | 'info' = 'dark';

  constructor() {}

  ngOnInit(): void {
    
  }

}