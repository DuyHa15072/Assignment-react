import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useEffect, useState } from 'react';
import { ProductType } from '../../../types/products';
import {listsProduct,deleteProduct} from '../../../features/product/productSlice'
import { Link } from 'react-router-dom';
const ListProduct = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.value)
  useEffect(() => {
    dispatch(listsProduct());
}, [])
const removeItem = (id: any) => {
  confirm("Bạn có muốn xoá không ?");
  dispatch(deleteProduct(id))
}
  return (
    <div className="w-full overflow-hidden rounded-lg shadow-xs">
    <div className='flex justify-between mb-[20px]'>
        <h3 className='text-[30px]'>Products</h3>
        <Link to="/admin/products/add" className=' inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#6F4E37] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 no-underline'>+ Add Category</Link>
    </div>
    <div className="w-full overflow-x-auto">
        <table className=" whitespace-no-wrap " >
            <thead>
                <tr className="text-xs font-semibold tracking-wide text-left text-white uppercase border-b bg-[#6F4E37]">
                    <th className="px-4 py-3">STT</th>
                    <th className="px-4 py-3">Category</th>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Img</th>
                    <th className="px-4 py-3">Price</th>
                    <th className="px-4 py-3">Quantity</th>
                    <th className="px-4 py-3">Desc</th>
                    <th className="px-4 py-3">Action</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                {products?.map((item : ProductType, index) => {
                    return (
                        <tr key={index} className="text-gray-700 dark:text-gray-400">
                            <td className="px-4 py-3 text-sm">
                                {index + 1}
                            </td>
                            <td className="px-4 py-3 text-sm">
                                {item.category}
                            </td>
                            <td className="px-4 py-3 text-sm">
                                {item.name}
                            </td>
                            <td>
                            <img className="h-10 w-10 rounded-full" src={item.img} alt="" />
                            </td>
                            <td className="px-4 py-3 text-sm">
                                {item.price}
                            </td>
                            <td className="px-4 py-3 text-sm">
                                {item.quantity}
                            </td>
                            <td className="px-4 py-3 text-sm">
                                {item.desc}
                            </td>
                            <td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <Link to={`/admin/products/${item._id}/edit`} className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 no-underline">Update</Link>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button onClick={() => {removeItem(item._id)}} className="bnt btn-remove inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">remove</button>
                              </td>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default ListProduct