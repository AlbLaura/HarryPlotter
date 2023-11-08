import { Component, OnInit } from '@angular/core';
import { ICard } from '../card/icard.metadata';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent{

  public products: ICard[] = [
    {
      title: 'Pikachu - Polarizado',
      category: 'tazas',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus recusandae nemo quisquam aliquid eum repudiandae qui, nisi illum beatae sequi eligendi vel officia tempora natus ipsam, voluptatem quaerat ex? Mollitia?',
      image: '../assets/console.png',
      price: 500
    },
    {
      title: 'Pikachu - Polarizado',
      category: 'posters',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus recusandae nemo quisquam aliquid eum repudiandae',
      image: '../assets/banner-image.png',
      price: 500
    },
    {
      title: 'Pikachu - Polarizado',
      category: 'almohadas',
      description: '...',
      image: '',
      price: 500
    },
    {
      title: 'Pikachu - Polarizado',
      category: 'stickers',
      description: '...',
      image: '',
      price: 500
    },
    {
      title: 'Pikachu - Polarizado',
      category: 'combos',
      description: '...',
      image: '',
      price: 500
    }
];

}
