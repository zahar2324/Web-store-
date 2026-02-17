export type Category = {
    id: number;
    name: string;
}
export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    offerPrice: number;
    image: string[];
    category: string[];
    color: string;
    date: string;
    popular: boolean;
}