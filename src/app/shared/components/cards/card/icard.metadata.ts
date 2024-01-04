export interface ICard {
    id: number;
    image: string;
    title: string;
    description: string;
    price: number;
    category: string;
    cant?: number;
    subcategory?: number;
}