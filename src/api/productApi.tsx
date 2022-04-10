import { IProduct } from "../types/productType";
import instance from "./config";

export const list = () =>{
    const url = "/products";
    return instance.get(url)
};
export const read = (_id : any) =>{
    const url = `/product/${_id}`;
    return instance.get(url)
};
export const remove = (id :any) =>{
    const url = `/product/${id}`;
    return instance.delete(url)
};
export const create = (product : IProduct) =>{
    const url = "/products";
    return instance.post(url,product)
};
export const update = (product : IProduct) =>{
    const url = `/product/${product._id}`;
    return instance.put(url,product)
};