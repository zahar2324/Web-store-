export type Category = {
    id: number;
    documentId: string;
    name: string;
    slug?: string;
}

export type Image = {
    id: number;
    documentId: string;
    url: string;
    formats?: any;
}

export type Product = {
    id: number;
    documentId: string;
    name: string;
    description: string;
    price: number;
    offerPrice: number;
    images: Image[];
    categories: Category[];
    color: string;
    
    date: string;
    popular: boolean;
    slug: string;

    category: string;
}