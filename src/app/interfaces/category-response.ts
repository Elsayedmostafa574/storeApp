import { Category, Metadata } from "./products";

export interface CategoryResponse {
    results : number,
    metadata : Metadata,
    data : Category
}
