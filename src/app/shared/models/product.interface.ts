export interface ProductI {
    _id: string;
    name: string;
    description: string;
    basePrice: number;
    taxRate: number;
    inventoryQuantity: number;
    status: string;
}