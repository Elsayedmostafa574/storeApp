export interface Products {
    results : number,
    metadata : Metadata,
    data: Data[]
}
export interface Metadata {
    currentPage : number,
    numberOfPages : number,
    limit: number,
    nextPage : number
}
export interface Data {
    sold : number,
    images : string[],
    subcategory : Subcategory[],
    ratingsQuantity : number,
    _id : string,
    title : string,
    slug : string,
    description : string,
    quantity : number,
    price : number,
    imageCover : string,
    category : Category,
    brand : Brand,
    ratingsAverage : number,
    createdAt : string,
    updatedAt : string,
    __v : number,
    reviews : [],
    id : string,
}
export interface Subcategory{
    _id : string,
    name : string,
    slug : string,
    category : string  
}
export interface Category {
    _id : string,
    name : string,
    slug : string,
    image : string,
    createdAt? : string,
    updatedAt ?: string
}
export interface BrandsResponse{
    results : number,
    metadata : Metadata,
    data : Brand
}
export interface Brand {
    _id : string,
    name : string,
    slug : string,
    image : string,
    createdAt? : string,
    updatedAt ?: string
}