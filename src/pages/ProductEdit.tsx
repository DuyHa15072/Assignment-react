import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { read } from '../api/productApi';
import { IProduct } from '../types/productType'

type ProductEditProps = {
    onUpdate: (product: IProduct) => void
}
type FormInputs = {
    name: string,
    price: number,
    img:String
}
const ProductEdit = (props: ProductEditProps) => {
    const { register, handleSubmit, formState: {errors}, reset} = useForm<FormInputs>();
    const navigate = useNavigate();
    const { id } = useParams();


    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            reset(data);
        }
        getProduct();
    }, [])

    const onSubmit: SubmitHandler<FormInputs> = data => {
        console.log(data)
        props.onUpdate(data);
        navigate("/admin/products")
    } 
  return (
      <form action="" onSubmit={handleSubmit(onSubmit)}>
          <h2 className='text-center text-[40px]'>Up date</h2>
          <div>
          <label className="sr-only">Tên sản phẩm</label>
          <input type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"  {...register('name', {required: true})}/>
          </div>
        <div>
        <label className="sr-only">ảnh sản phẩm</label>
        <input type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"  {...register("img")} />
        </div>
        <div>
        <label className="sr-only">Giá sản phẩm </label>
        <input type="number" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"  {...register("price")} />
        </div>
        <button className='bg-red-600 text-white p-2 rounded-2xl'>Update</button>
      </form>
  )
}

export default ProductEdit