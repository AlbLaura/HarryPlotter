import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
/*import { MatPaginatorModule } from "@angular/material/paginator" */

/**
 * @title Paginator 
 */
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  standalone: true,
    imports: [CommonModule]
})
export class PaginationComponent {

//? Hace falta implementar un service con el listado de productos total

}
