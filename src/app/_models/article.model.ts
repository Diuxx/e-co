
/**
 * Class Articles
 */
export class Article {
    id: string;
    productId: string;
    title: string;
    prices: { original: number, sale: number }; 
    quantity: number;
    images: string[]; 
    promotion: number; // purcent
    taxable: boolean;
    currency: string;
    slug: string; // référencement
    tags: string[];
    blurb: string;
}