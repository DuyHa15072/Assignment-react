import { useForm, SubmitHandler } from 'react-hook-form';
import { IProduct } from '../types/productType';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
 
type ProductAddProps = {
    onAdd: (product: IProduct) => void
}
type TInputs = {
    name: String,
    price: number,
    img:String
}
const Upload = () =>{
    const [fileInputState, setFileInputState] = useState('');
    const [prewiewSource, setPreviewSource] = useState('');
}

const handleFileInputChange = (e) =>{
    const file  = e.target.file[0];
    reader.onloadend = () => {
         setPreviewSource(reader.result);
    };
};

const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<TInputs>()
    const Navigate = useNavigate();
    const onSubmit: SubmitHandler<TInputs> = (data) => {
        props.onAdd(data)
        Navigate('/admin/products')
    }
    return (
        <div>
            <h2 className='text-2xl font-[600] text-center py-5'>Thêm sản phẩm</h2>
            <form className="mt-8 space-y-6 w-3/5 mx-auto"onSubmit={handleSubmit(onSubmit)}>
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label className="sr-only">Tên sản phẩm</label>
                        <input type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Tên sản phẩm" {...register('name')} />
                    </div>
                    <div>
                        <label className="sr-only">Ảnh sản phẩm</label>
                        <input type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Ảnh sản phẩm (url)" {...register('img')}  id="fileInput"  name="image" onChange={handleFileInputChange}  value={fileInputState} />
                    </div>
                    <div>
                        <label className="sr-only">Giá sản  </label>
                        <input type="number" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Giá sản phẩm" {...register('price')}/>
                    </div>
                </div>
                <div>
                    <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#6F4E37] hover:bg-stone-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Thêm
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ProductAdd;