import { Pipe, PipeTransform } from '@angular/core';
import { ICard } from '@components/interfaces/icard.metadata';

@Pipe({
  name: 'filterBusqueda',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(producto: ICard[] | null, terminoBuscador: string): ICard[] {
    if (!producto || !terminoBuscador) {
      return producto || [];
    }
    terminoBuscador = terminoBuscador.toLowerCase();
    return producto.filter(producto => producto.title.toLowerCase().includes(terminoBuscador));
  }

}
