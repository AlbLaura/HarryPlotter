export interface ICard {
    id: number;
    image: string;
    title: string;
    description: string;
    price?: number;
    category?: string;
    cant?: number;
    subcategory?: number;
}

export interface News {
    id: number;
    autor: string;
    title: string;
    description: string;
    image: string;
    altImage: string;
    fecha: string;
}

export interface ProductCart {
    producto: ICard;
    cantidad: number;
}