import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {
  @Input() texto = '';
  @Input() type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'dark' | 'info' = 'dark';

  constructor() {}

  ngOnInit(): void {
    
  }

}